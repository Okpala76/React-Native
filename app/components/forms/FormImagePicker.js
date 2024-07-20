import React from 'react';
import { useFormikContext } from 'formik';


import AppImageInputList from '../imagePick/AppImageInputList';
import ErrorMessage from './ErrorMessage';
import { LocationAccuracy, LocationActivityType } from 'expo-location';



function FormImagePicker({name}) {
    const {errors, setFieldValue, touched, values} = useFormikContext();
    const imageUris = values[name];


    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUris,uri]);
      };
    
    const handleRemove = (uri) => {
        setFieldValue(name, imageUris.filter((imageUri) => imageUri !== uri));
    }



    return (
        <>
            <AppImageInputList
                imageUris = {imageUris}
                onRemoveImage = {handleRemove}
                onAddImage={handleAdd}
            />
            <ErrorMessage error = {errors[name]} visible={touched[name]}/>
        </>
  );
}

export default FormImagePicker;