import { Image, StyleSheet } from 'react-native'
import React from 'react'
import * as Yup from "yup";

import Screen from '../components/Screen'

import {AppForm, AppFormField,SubmitButton} from '../components/forms'


export default function LoginScreen() {
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});


  return (
    <Screen style={styles.screen}>
        <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}/>

        <AppForm
            initialValues = {{email: "", Password: ""}}
            onSubmit = { values => console.log(values)}
            validationSchema = {validationSchema}
            >
                <AppFormField
                    autoCapitalize ="none"
                    autoCorrect={false}
                    icon ="lock"
                    name = "email"
                    keyboardType = "email-address"
                    placeholder = "Email"
                    textContentType= "emailAddress"
                />
            
                <AppFormField
                    autoCapitalize ="none"
                    autoCorrect={false}
                    icon ="lock"
                    secureTextEntry = {true}
                    placeholder = "Password"
                    textContentType="password"  
                    name = "password" 
                />
            
            <SubmitButton title="Login"/>              
            
        </AppForm>


    </Screen>
  )
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height:80,
        alignSelf: "center",
        marginTop:50,
        marginBottom: 20,
        
    },
    screen: {
        padding: 10
    }
})