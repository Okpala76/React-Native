import React from 'react';
import Constants from "expo-constants";
import { Button,StyleSheet,View } from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo'


function Appnetwork(props) {
     const netInfo = useNetInfo();

  return (
    <View style = {styles.button}>
      {!netInfo.isInternetReachable && <Button  title = {'No Network Available'}  color={"tomato"}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    paddingTop: Constants.statusBarHeight,
    width: '100%',
    zIndex:1,
    

  }
})



export default Appnetwork;