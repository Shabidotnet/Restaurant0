import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import icons from '../Icons'
const Header = ({title,onPress}) => {
    return (
        <View style={styles.container}>
        {onPress?
        <TouchableOpacity onPress={onPress}>
        <Image source={icons.back} style={styles.backIcon}/>
        </TouchableOpacity>
        :null}  
        <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: 50,
        flexDirection:'row',
        paddingHorizontal:10,
        alignItems:'center'
             
    },
    text:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        paddingLeft:10
    },
    backIcon:{
        width:20,
        height:20,
        tintColor:'white'
    }
})