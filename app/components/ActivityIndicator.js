import React from 'react';
import { StyleSheet, View } from 'react-native';


import LottieView from 'lottie-react-native';



function ActivityIndicator({visible = false}) {
  if (!visible) return null;
 <View style ={styles.container}>

   return (<LottieView
     style={{flex:1}}
     autoPlay
     loop
     source = {require('../assets/animations/Animation - 1721703080170.json')}/>
   )
 </View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    zIndex: 1,
    opacity: 0.8,
  }
})

export default ActivityIndicator;