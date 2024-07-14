
import React, { useState } from 'react';
import {View} from 'react-native';

import Screen from '../components/Screen';
import AppPicker from '../components/AppPicker';

import AppTextinput from '../components/AppTextinput';



export default function Play() {

  return (
    <Screen>
        
        <AppPicker placeholder = " Category"  icon = "apps" />
        

        <AppTextinput  icon = "email" placeholder= "Email"/>
    </Screen>
  );
}