import { useState } from 'react';
import CustomModal from '../components/Modal';
import AddItem from '../components/AddItem';
import List from '../components/List';
import {View, StyleSheet} from 'react-native'

const DiaryScreen = () => {
    const [textItem, setTextItem] = useState('');
    const [itemList, setItemList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [itemSelected, setItemSelected] = useState({});
    const [completedItem, setCompletedItem] = useState(false);

    const addItem = () => {
        setItemList(currentItems => [...currentItems, { id: Date.now(), value: textItem, completed: false }]);
        setTextItem('')
    }
    const changeItem = (text) => setTextItem(text)
    
    const onHandlerDeleteItem = (id) => {
        setItemList(currentItems => currentItems.filter(item => item.id !== id))
        setItemSelected({})
        setModalVisible(!modalVisible)
        setCompletedItem(!completedItem)
    }
    const onHandlerModal = (id) => {
        setItemSelected(itemList.find(item => item.id == id))
        setModalVisible(!modalVisible)
    }
    const onHandlerCompleteItem = (id) => {
        let itemCompleted = itemList.findIndex((item) => item.id === id)
        itemList[itemCompleted].completed = true
        setItemList([...itemList])
        setCompletedItem(!completedItem)
        setModalVisible(!modalVisible)
    }

    return (
        <View style={styles.screen}>
            <CustomModal
                modalVisible={modalVisible}
                onHandlerDeleteItem={onHandlerDeleteItem}
                itemSelected={itemSelected}
                onHandlerCompleteItem={onHandlerCompleteItem}
                completedItem={completedItem}
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
    )
}

export default DiaryScreen

const styles = StyleSheet.create({
    screen: {
        padding: 30,
        height: '100%',
    },
})