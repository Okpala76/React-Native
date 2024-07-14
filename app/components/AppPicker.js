import { View, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import {MaterialCommunityIcons} from "@expo/vector-icons"


import colors from '../config/colors'

import AppText from './AppText'


export default function AppPicker({icon, placeholder, ...otherProps}) {
    const[firstName, setfirstName] = useState("")


  return (
    <View style={styles.container }>
        
        {icon && <MaterialCommunityIcons
            name={icon}
            size = {25}
            color= {colors.dark}
            style ={styles.icon}
        />}

        <AppText style={{flex:1}}>
            {placeholder}
        </AppText>
        
        <MaterialCommunityIcons
            name={"chevron-down"}
            size = {25}
            color= {colors.dark}
            
        />
        
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.light,
        borderRadius: 0,
        flexDirection: "row",
        width: " 100%",
        padding: 15,
        marginVertical:10,
        justifyContent: "flex-start",
        alignItems: "center",
    },

    icon:{
        margin: 10

    },

    
})