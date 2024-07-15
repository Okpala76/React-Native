import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';



function SubmitButton({title , color}) {
    const {handleSubmit} = useFormikContext();

    return (
        <AppButton colorr = {color} children= {title} onPress={handleSubmit}/> 
    );
}

export default SubmitButton;