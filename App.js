
import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text, FlatList, TouchableOpacity, Modal} from 'react-native';

export default function App() {

  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const changeItem = (text) => setTextItem(text);

  const addItem = () => {
    setItemList(currentItems => [...currentItems, { id: Date.now(), value: textItem }]);
    setTextItem('')
  }


  const onHandlerDeleteItem = (id) => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  }

  const onHandlerModal = (id) => {
    setItemList(itemList.find(item => item.id == id))
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.screen}>
      <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      >
        <View style={styles.modalTitle}>
          <Text>
            Mi Modal
          </Text>
        </View>
        <View style={styles.modalMessage}>
          <Text>
            ¿Estas seguro que deseas borrar?
          </Text>
        </View>
        <View style={styles.Message}>
          <Text style={styles.Message}>{itemSelected.value}</Text>
        </View>
        <View style={styles.modalButton}>
          <Button onPress={() => onHandlerDeleteItem(itemSelected.id)} title='Confirmar' />
        </View>
      </Modal>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Ingrese aqui' style={styles.input} value={textItem} onChangeText={changeItem} />
        <Button title='Add' onPress={addItem} disabled={textItem.length < 1 ? true : false} />
      </View>
      <FlatList
        data={itemList}
        renderItem={data => (
          <TouchableOpacity onPress={()=> onHandlerModal(data.item.id)} style={styles.item}>
              <Text> {data.item.value}</Text>
          </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "80%",
    height: 50,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginTop: '10%',
    height: 50,
  },
});
