import React from 'react';
import { StyleSheet , View} from "react-native"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen from './app/components/Screen';
import ListEditScreen from './app/screen/ListEditScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style = {{flex:1, paddingTop:20}}>

    <GestureHandlerRootView style={{ flex: 1 }}>
        <ListEditScreen/>
      </GestureHandlerRootView>

    </View>
  );
}

