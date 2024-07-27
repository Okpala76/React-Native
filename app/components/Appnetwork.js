import React from 'react';
import Constants from "expo-constants";
import { Button,StyleSheet,View } from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo'


function Appnetwork(props) {
     const netInfo = useNetInfo();

  return (
    <View style = {styles.button}>
      <Button  title = {'No Network Available'} disabled = {!netInfo.isInternetReachable}  color={"tomato"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingTop: Constants.statusBarHeight,
    width: '100%',
    zIndex:1,
    

  }
})



export default Appnetwork;