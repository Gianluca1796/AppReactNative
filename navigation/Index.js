import TabNavigator from './TabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}

export default MainNavigation