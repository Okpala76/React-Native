import React, {useState} from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import navigationTheme from '../navigation/navigationTheme';
import TabNavigator from '../navigation/AppNavigator';
import Appnetwork from '../components/Appnetwork';
import AuthNavigator from '../navigation/AuthNavigator';
import AuthContext from '../auth/context'


export default function Play() {
  const [user, setUser] = useState()

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



