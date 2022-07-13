
import { useState } from 'react';
import { StyleSheet, TextInput, View, ImageBackground } from 'react-native';

import CustomModal from './components/Modal';
import AddItem from './components/AddItem';
import List from './components/List';

export default function App() {

  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const image = { uri: 'https://i.ibb.co/zh756NS/Rectangle-2.png'};

  const changeItem = (text) => setTextItem(text);

  const addItem = () => {
    setItemList(currentItems => [...currentItems, { id: Date.now(), value: textItem, completed: false }]);
    setTextItem('')
  }


  const onHandlerDeleteItem = (id) => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  }

  const onHandlerModal = (id) => {
    setItemSelected(itemList.find(item => item.id == id))
    setModalVisible(!modalVisible)
  }

  const onHandlerCompleteItem = (id) => {
    let itemCompleted = itemList.findIndex((item) => item.id === id)
    itemList[itemCompleted].completed = true
    setItemList([...itemList])
    setModalVisible(!modalVisible)
  }

  return (
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      >
    <View style={styles.screen}>
        <CustomModal
          modalVisible={modalVisible}
          onHandlerDeleteItem={onHandlerDeleteItem}
          itemSelected={itemSelected}
          onHandlerCompleteItem={onHandlerCompleteItem}
        />
        <AddItem
          textItem={textItem}
          addItem={addItem}
          changeItem={changeItem}
        />
        <List
          onHandlerModal={onHandlerModal}
          itemList={itemList}
          complete={false}
        />
    </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    height: '100%',
    marginTop: '10%'
  },
  image: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: "center"
  }
});
