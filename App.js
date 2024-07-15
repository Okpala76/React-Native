import React from 'react';
import { StyleSheet , View} from "react-native"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListEditScreen from './app/screen/ListEditScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      
        <ListEditScreen/>
     
  );
}

