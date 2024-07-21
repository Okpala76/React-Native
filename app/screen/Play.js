 import React from 'react';
 import {  Button, StyleSheet, Text } from 'react-native';
 import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'



 import Screen from '../components/Screen'; 
 import WelcomeScreen from './WelcomeScreen';
 import LoginScreen from "./LoginScreen";
 import RegisterScreen from './RegisterScreen';


 
 const Link = () => {
  const navigation = useNavigation();
    return (
      <Button
        title = "Click"
        onPress={() => navigation.navigate("TweetDetails", {id:"me"}) }
      />

    )
  }

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
      name= "WelcomeScreen" 
      component={WelcomeScreen} 

    />
    <Stack.Screen 
      name= "LoginScreen" 
      component={LoginScreen} 

    />
    <Stack.Screen 
      name= "RegisterScreen" 
      component={RegisterScreen} 

    />
   

  </Stack.Navigator>
)



function Play() {
  return (
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
    
  );
}




export default Play;