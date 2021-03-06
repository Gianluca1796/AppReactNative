import React from 'react'
import { View, Button, StyleSheet, Text } from 'react-native'
import Card from '../Card'
import Input from '../Input'


const AddItem = (props) => {

    const { textItem, changeItem, addItem } = props

    return (
        <View>
            <Text style={styles.title}>¿Qué tienes que hacer hoy?</Text>
            <Card style={styles.inputContainer}>
                <Input
                    placeholder='Ingrese aqui'
                    style={styles.input}
                    value={textItem}
                    onChangeText={changeItem}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    maxLenth={20}
                />
                {textItem.length > 0 && (
                    <Button
                        title='Agregar'
                        color='#000'
                        onPress={addItem}
                    />
                )}
            </Card>
        </View>
    )
}

export default AddItem

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 30,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: "80%",
        height: 50,
        marginBottom: 20
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontFamily: 'Indieregular',
        backgroundColor: "rgba(242, 225, 242, 0.8)",
        padding: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
    }

})