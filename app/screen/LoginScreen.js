import { Image, StyleSheet } from 'react-native'
import React , { useState} from 'react'
import * as Yup from "yup";
import  {jwtDecode}  from 'jwt-decode';

import Screen from '../components/Screen'

import {AppForm, AppFormField,SubmitButton , ErrorMessage} from '../components/forms'
import authApi from "../api/auth"





// The main fuction
export default function LoginScreen() {
    const [loginFailed, setLoginFailed] = useState(false)


const handleSubmit =  async ({email,password}) => {
    const result = await authApi.login(email,password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    const user = jwtDecode(result.data)
    console.log(user);
}

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});


// the return
  return (
    <Screen style={styles.screen}>
        <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}/>

        <AppForm
            initialValues = {{email: "", Password: ""}}
            onSubmit = { handleSubmit}
            validationSchema = {validationSchema}
            >
                <ErrorMessage error="invalid email and/or password" visible={loginFailed} />

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