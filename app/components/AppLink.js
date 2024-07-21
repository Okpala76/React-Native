import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function AppLink({Page}) {
    const navigation = useNavigation();
    return (
        () => navigation.navigate({Page})
      )

}

export default AppLink;