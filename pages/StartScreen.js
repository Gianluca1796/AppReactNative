import React, { useState } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import AddDay from '../components/AddDay'

const StartScreen = (props) => {

    const [day, setDay] = useState('');

    const addDay = (day) => setDay(day)

    return (
        <View>
            <AddDay
                day={day}
                addDay={addDay}
            />
            {day.length > 0 && (
                <Button
                    title='Iniciar'
                    color='#000'
                    onPress={() => props.onStartDiary(day)}
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
    }
})