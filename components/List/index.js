import React from 'react'
import { FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native'

const List = (props) => {

    const {onHandlerModal, itemList} = props
    return (
        <FlatList
            data={itemList}
            renderItem={data => (
                <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} style={data.item.completed ? styles.itemCompleted : styles.item}>
                    <Text style={{textDecorationLine: data.item.completed ? 'line-through' : null}}>{data.item.value}</Text>
                </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        marginTop: '10%',
        height: 50,
        backgroundColor: 'white'
    },
    itemCompleted: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        marginTop: '10%',
        height: 50,
        backgroundColor: '#F55833'
    }
})
export default List