import React from 'react'
import {View,StyleSheet,Text, Button} from 'react-native';
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
        width: "100%",
        alignItems: "cover",
        borderRadius: 50,
        overflow: "hidden"
    },
    text: {
        color: colors.white,

    }
    //button: {

    }


)
export default Login;