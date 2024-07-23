 import React from 'react';

import { NavigationContainer} from '@react-navigation/native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';



import navigationTheme from '../navigation/navigationTheme';

import TabNavigator from '../navigation/AppNavigator';




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