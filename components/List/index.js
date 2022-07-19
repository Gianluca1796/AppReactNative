import React from 'react'
import { FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

const List = (props) => {

    const {onHandlerModal, itemList} = props
    return (
        <FlatList
            data={itemList}
            renderItem={data => (
                <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} style={data.item.completed ? styles.itemCompleted : styles.item}>
                    <Text style={styles.text}>{data.item.value}</Text>
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
        borderWidth: 0.5,
        marginTop: '10%',
        paddingLeft:10,
        height: 50,
        width:'80%',
        backgroundColor: Colors.primary,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
    },
    itemCompleted: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "black",
        paddingLeft:10,
        width:'80%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        marginTop: '10%',
        height: 50,
        backgroundColor: Colors.completed,
    },
    text:{
        color:'white'
    }
})
export default List