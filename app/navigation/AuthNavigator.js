import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {useNavigation } from '@react-navigation/native';
import WelcomeScreen from '../screen/WelcomeScreen';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';


const navigation = useNavigation();

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor:"dodgerblue"},
      headerTintColor:"white",
      headerShown:false,

    }}
  >
    <Stack.Screen 
      name= "Welcome" 
      component={WelcomeScreen} 
    />
    <Stack.Screen 
      name= "Login" 
      component={LoginScreen} 
    />
    <Stack.Screen 
      name= "Register" 
      component={RegisterScreen} 
    />

  </Stack.Navigator>
)

export default AuthNavigator;