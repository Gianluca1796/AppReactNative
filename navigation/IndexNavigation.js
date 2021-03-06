import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../constants/colors'

import DiaryScreen from '../pages/DiaryScreen';
import StartScreen from '../pages/StartScreen';

const Stack = createNativeStackNavigator()

const IndexNavigation = () => {
    return (
            <Stack.Navigator initialRouteName='Home'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Colors.header
                    },
                    headerBackTitleStyle: {
                        fontWeigth: 'bold'
                    }
                }}>
                <Stack.Screen name='Home' component={StartScreen} />
                <Stack.Screen name={'Agenda'} component={DiaryScreen} options={({ route }) => ({ title: route.params.day })} />
            </Stack.Navigator>
    )
}

export default IndexNavigation