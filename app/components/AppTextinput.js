import { View,  TextInput, StyleSheet,Platform } from 'react-native'
import React, {useState} from 'react'
import {MaterialCommunityIcons} from "@expo/vector-icons"



import colors from '../config/colors'
import  defaultStyles from '../config/styles'


export default function AppTextinput({icon, ...otherProps}) {
    const[firstName, setfirstName] = useState("")


  return (
    <View style={styles.container}>
        {icon && <MaterialCommunityIcons
            name={icon}
            size = {25}
            color= {colors.dark}
            style ={styles.icon}
        /> }

        <TextInput sytle={defaultStyles.text} {...otherProps} />
        
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: " 100%",
        padding: 15,
        marginVertical:10,
    },

    icon:{
        margin: 10

    },

    
})