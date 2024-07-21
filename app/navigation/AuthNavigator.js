import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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