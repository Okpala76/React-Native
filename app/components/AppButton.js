import React from 'react'
import {View,StyleSheet, Button} from 'react-native';
import colors from '../config/colors';


function AppButton({children,colorr,onPress}) {
    
    return (
        <View style = {styles.container}>
            <Button 
                title= {children}
                color= {colorr}
                onPress={onPress}
                 
            />
        </View>

  )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        width: "95%",
        justifyContent:"center",
        //alignItems: "center",
        borderRadius: 25,
        overflow: "hidden"
        

    },
    text: {
        color: colors.white,

    }


    }


)
export default AppButton;