import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ImportantsScreen from '../pages/ImportantsScreen'
import  Colors  from '../constants/colors'

const Stack = createNativeStackNavigator()

const ImportantNavigator = () => {
    return (
        <Stack.Navigator
        initialRouteName='Importants'
        screenOptions={{
            headerStyle: {
                backgroundColor: Colors.header
            }
        }}
        >
            <Stack.Screen
            name="Importants"
            component={ImportantsScreen}
            options={{title: "Tareas importantes "}}
            />
        </Stack.Navigator>
    )
}


export default ImportantNavigator