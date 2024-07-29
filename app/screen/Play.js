import React, {useState, useEffect} from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';

import navigationTheme from '../navigation/navigationTheme';
import TabNavigator from '../navigation/AppNavigator';
import Appnetwork from '../components/Appnetwork';
import AuthNavigator from '../navigation/AuthNavigator';
import AuthContext from '../auth/context'
import authStorage from "../auth/storage"




export default function Play() {
  const [user, setUser] = useState()
  const [isReady, setIsReady] = useState(false)

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
    
  }

  useEffect(() => {
    const prepareApp = async () => {
      try {
        await restoreUser();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepareApp();
  }, []);
  
  if (!isReady) return null;

  return (
    <AuthContext.Provider value = {{user, setUser}}>
    <Appnetwork/>
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer theme = {navigationTheme}>
      {user ? <TabNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
    </GestureHandlerRootView>
    </AuthContext.Provider>
  );
};



