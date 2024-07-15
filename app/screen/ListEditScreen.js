import React from 'react'
import { StyleSheet } from 'react-native';
import * as Yup from "yup";

import {SubmitButton,AppForm,AppFormField } from '../components/forms'
import Screen from '../components/Screen'
import AppFormPicker from '../components/forms/AppFormPicker';



const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("name"),
  email: Yup.string().required().email().label("Email"),
  category: Yup.object().required().nullable().label("Category"),
  password: Yup.string().required().min(4).label("Password"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];


export default function ListEditScreen() {

  //Yup validator

  return (
    <Screen style={styles.screen}>
        <AppForm
            initialValues = {{email: "", name: "", Password: "", category: null,}}
            onSubmit = { values => console.log(values)}
            validationSchema = {validationSchema}
            >
                <AppFormField
                    autoCapitalize ="none"
                    autoCorrect={false}
                    icon = "head"
                    secureTextEntry = {true}
                    placeholder = "Name"
                    textContentType="name"  
                    name = "name" 
                />
                <AppFormField
                    autoCapitalize ="none"
                    autoCorrect={false}
                    icon ="lock"
                    name = "email"
                    keyboardType = "email-address"
                    placeholder = "Email"
                    textContentType= "emailAddress"
                />

                  <AppFormPicker
                  icon={"format-list-bulleted"}
                  items={categories} 
                  name="category" 
                  placeholder="Category"/>
            
                <AppFormField
                    autoCapitalize ="none"
                    autoCorrect={false}
                    icon ="lock"
                    secureTextEntry = {true}
                    placeholder = "Password"
                    textContentType="password"  
                    name = "password" 
                />


            <SubmitButton color = "red" title="Register"/>              
            
        </AppForm>


    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    
    padding: 10,
  }
})