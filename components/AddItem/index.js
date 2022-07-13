import React from 'react'
import {View, Button, TextInput, StyleSheet} from 'react-native'

const AddItem= (props) => {

    const {textItem, changeItem, addItem} = props

    return (
    <View style={styles.inputContainer}>
        <TextInput
        placeholder='Ingrese aqui' 
        style={styles.input} 
        value={textItem} 
        onChangeText={changeItem} />
        <Button 
        title='Add' 
        color='#000'
        onPress={addItem} 
        disabled={textItem.length < 1 ? true : false} />
    </View>
    )
}

export default AddItem

const styles = StyleSheet.create({
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

})