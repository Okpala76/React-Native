import React from 'react';
import { useFormikContext } from 'formik';

import AppTextinput from '../AppTextinput';
import  ErrorMessage from "./ErrorMessage"



function AppFormField({name, ...otherProps}) {
    const {errors, setFieldTouched,setFieldValue, touched, values} = useFormikContext();

    return (
        <>
        <AppTextinput
                onChangeText={text => setFieldValue(name,text)}
                value = {values[name]}
                onBlur={()=> setFieldTouched(name)}
                {...otherProps}
                
            />
            <ErrorMessage error= {errors[name]} visible={touched[name]}/>

        </>
    );
}

export default AppFormField;