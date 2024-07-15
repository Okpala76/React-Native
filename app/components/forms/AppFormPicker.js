import React from 'react';
import { useFormikContext } from 'formik';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';



function AppFormPicker({items, name, placeholder, icon }) {

    const {errors, setFieldValue, touched, values} = useFormikContext();
    return (
        <>
            <AppPicker
                icon={icon}
                items={items}
                onSelectedItems={(item) => setFieldValue(name, item)}
                selectedItems={values[name]}    
                placeholder={placeholder}
            />
            <ErrorMessage error = {errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormPicker;