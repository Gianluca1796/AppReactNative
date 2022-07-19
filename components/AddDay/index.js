import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import Card from '../Card'
import Input from '../Input'

const AddDay = (props) => {

    const {addDay, day} = props

    return (
        <View>
            <Text style={styles.title}>¿Qué día es hoy?</Text>
            <Card style={styles.inputContainer}>
                <Input
                    placeholder='Ingrese aqui'
                    style={styles.input}
                    value={day}
                    onChangeText={addDay}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    maxLenth={6}
                />
            </Card>
        </View>
    )
}

export default AddDay
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