import React from 'react';


import LottieView from 'lottie-react-native';

function ActivityIndicator({visible = false}) {
  if (!visible) return null;

  return (<LottieView
    style={{flex:1}}
    autoPlay
    loop
    source = {require('../assets/animations/Animation - 1721703080170.json')}/>
  )
}

export default ActivityIndicator;