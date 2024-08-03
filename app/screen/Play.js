import React, {useState, useEffect} from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import {Notifications} from 'expo-notifications'
import {navigationRef} from '../navigation/rootNavigation'


import navigationTheme from '../navigation/navigationTheme';
import TabNavigator from '../navigation/AppNavigator';
import Appnetwork from '../components/Appnetwork';
import AuthNavigator from '../navigation/AuthNavigator';
import AuthContext from '../auth/context'
import useSplash from '../hooks/useSplash';
import logger from '../utility/logger';




export default function Play() {
  const { user, setUser, isReady } = useSplash();
  if (!isReady) return null;

  // const {expoPushToken,notification} = usePushNotifications();

  // const data = JSON.stringify(notification, undefined, 2);\\

  

  return (
    <AuthContext.Provider value = {{user, setUser}}>
    <Appnetwork/>
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer ref = {navigationRef}  theme = {navigationTheme}>
      {user ? <TabNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
    </GestureHandlerRootView>
    </AuthContext.Provider>
  );
};



