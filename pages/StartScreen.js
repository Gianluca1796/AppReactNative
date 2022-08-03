import React, { useState } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import AddDay from '../components/AddDay'
import Colors from '../constants/colors'

const StartScreen = ({navigation}) => {

    const [day, setDay] = useState('');

    const addDay = (day) => setDay(day)

    return (
        <View style={styles.background}>
            <AddDay
                day={day}
                addDay={addDay}
            />
            {day.length > 0 && (
                <Button
                    title='Iniciar'
                    color='#000'
                    onPress={() => navigation.navigate('Agenda', {day : day})}
                    style={styles.button}
                />
            )}
        </View>
    )
}

export default StartScreen

const styles = StyleSheet.create({
    button: {
        fontFamily: 'Indieregular',
    },
    background: {
        backgroundColor: Colors.header,
        height: '100%'
    }
});