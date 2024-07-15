import React from 'react';
import { useFormikContext } from 'formik';

import AppTextinput from '../AppTextinput';
import  ErrorMessage from "./ErrorMessage"



function AppFormField({name, ...otherProps}) {
    const {handleChange,errors, setFieldTouched, touched} = useFormikContext();

    return (
        <>
        <AppTextinput
                onChangeText={handleChange(name)}
                onBlur={()=> setFieldTouched(name)}
                {...otherProps}
                
            />
            <ErrorMessage error= {errors[name]} visible={touched[name]}/>

        </>
    );
}

export default AppFormField;