import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

const Header = (props) => {

    const {title} = props

    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width:"100%",
        height:100,
        paddingTop:36,
        backgroundColor: Colors.header,
        alignItems:"center",
        justifyContent:"center",
    },
    title:{
        color:'black',
        fontSize:22,
        fontFamily:'Indieregular'
    }
})

export default Header