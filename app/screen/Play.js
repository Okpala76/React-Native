 import React from 'react';
 import {  Button, StyleSheet, Text } from 'react-native';
 import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { GestureHandlerRootView } from 'react-native-gesture-handler';


 import Screen from '../components/Screen'; 
 import WelcomeScreen from './WelcomeScreen';
 import LoginScreen from "./LoginScreen";
 import RegisterScreen from './RegisterScreen';
import AccountScreen from './AccountScreen';
import ListingScreen from './ListingScreen';
import Listing_Deats from './Listing_Deats';
import navigationTheme from '../navigation/navigationTheme';
 


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

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions = {{
      tabBarInactiveBackgroundColor: "white",
      tabBarActiveTintColor: "tomato"
      
    }}
  >
    <Tab.Screen name = "AccountScreen" component = {AccountScreen}/>
    
    <Tab.Screen 
      name = "ListingScreen"  
      component = {ListingScreen}
      
      />

    <Tab.Screen name = "Listing_Deats" component = {Listing_Deats}/>

      
  </Tab.Navigator>
  )



function Play() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer theme = {navigationTheme}>
      <TabNavigator/>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}




export default Play;