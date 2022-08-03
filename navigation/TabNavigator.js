import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import IndexNavigation from './IndexNavigation'
import ImportantNavigator from './ImportantNavigator'
import { StyleSheet, View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const BottomTabs = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar
        }}>
            <BottomTabs.Screen
                name="Inicio"
                component={IndexNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.item}>
                            <AntDesign name="home" size={24} color= {focused ? "blue" : "black"} />
                            <Text style={{color: focused ? "blue" : "black"}}>Inicio</Text>
                        </View>
                    )
                }}
            />
            <BottomTabs.Screen
                name="ImportantTab"
                component={ImportantNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.item}>
                            <AntDesign name="exclamationcircleo" size={24} color= {focused ? "blue" : "black"} />
                            <Text style={{color: focused ? "blue" : "black"}}>Importantes</Text>
                        </View>
                    )
                }}
            />
        </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: "#7f5df0",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height9: 90,
    },
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default TabNavigator