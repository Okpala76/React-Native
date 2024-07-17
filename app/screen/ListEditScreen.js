import React from 'react'
import { StyleSheet ,View } from 'react-native';
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
  { label: "Furniture", icon: "floor-lamp",backgroundColor:"#fc5c65", value: 1 },
  { label: "Car", icon: "car",backgroundColor:"#fd9644",value: 2 },
  { label: "Camera", icon: "camera",backgroundColor:"#fed330",value: 3 },
  { label: "Cards", icon: "cards",backgroundColor:"#26de81",value: 4 },
  { label: "Clothing", icon: "shoe-heel",backgroundColor:"#2bcbba",value: 5 },
  { label: "Sports", icon: "basketball",backgroundColor:"#45aaf2",value: 6 },
  { label: "Movies & Music", icon: "headphones",backgroundColor:"#4b7bec",value: 7 },

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
              <View style={{width:"100%"}}>


                <AppFormField
                    autoCapitalize ="none"
                    autoCorrect={false}
                    icon = "head"
                    secureTextEntry = {true}
                    placeholder = "Name"
                    textContentType="name"  
                    name = "name" 
                />
              </View>

              <View style={{width:"40%"}}>

                <AppFormField
                    autoCapitalize ="none"
                    autoCorrect={false}
                    icon ="lock"
                    name = "email"
                    keyboardType = "email-address"
                    placeholder = "Email"
                    textContentType= "emailAddress"
                />
              </View>

              <View style={{width:"60%"}}>

                  <AppFormPicker
                  icon={"format-list-bulleted"}
                  items={categories} 
                  name="category" 
                  placeholder="Category"/>
              </View>
            

              <View style={{width:"100%"}}>

                <AppFormField
                    autoCapitalize ="none"
                    autoCorrect={false}
                    icon ="lock"
                    secureTextEntry = {true}
                    placeholder = "Password"
                    textContentType="password"  
                    name = "password" 
                />
              </View>


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