import { View, Text, StyleSheet } from 'react-native'
import * as Yup from "yup";
import React from 'react'


import AppFormPicker from '../components/forms/AppFormPicker';
import { AppForm } from '../components/forms';

const validationSchema = Yup.object().shape({
  category: Yup.object().required().nullable().label("Category"),
  
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];




export default function Play() {
  return (

    <View style={{flex:1, paddingTop:40}}>

      <AppForm
        initialValues={{category:null}}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >

      <AppFormPicker
        items={categories} 
        name="category" 
        placeholder="Category"

      />
      </AppForm>

      
    </View>
  )
}