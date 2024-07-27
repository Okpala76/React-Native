import React, {useEffect} from 'react';
import { View, StyleSheet, Image ,TouchableWithoutFeedback, Alert} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";


import colors from '../../config/colors';

import * as ImagePicker from "expo-image-picker"



function AppImageInput({imageUri, onChangeImage}) {
  
  useEffect(() => {
    requestPermission();

   }, []);


  const requestPermission = async () => {
    const {status} = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("you need to enable permission to access the library");
    }
  };
  
  const handlePress = () => {
    if (!imageUri) selectImage();
    else Alert.alert('Delete', " are you sure you want to delete this image?",[
      {text:"Yes", onPress: () => onChangeImage(null)},
      {text: "No"},
    ])
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality:0.5

      });
      if (!result.canceled && result.assets.length > 0)
        onChangeImage(result.assets[0].uri )

    } catch (error) {
      console.log('Error reading image', error)
    }
  };

  return (
    <TouchableWithoutFeedback onPress = {handlePress}>
    <View style={styles.container}>
      {!imageUri && (<MaterialCommunityIcons name= "camera" size = {60}  color={"grey"}/>)}
      {imageUri && <Image source={{ uri: imageUri }} style = {styles.image} />}
    </View>
    </TouchableWithoutFeedback>
  );
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    height:100,
    justifyContent: "center",
    overflow: 'hidden',
    width: 100,
  },
   image : {
    borderRadius: 15,
    width: "100%", 
    height:"100%",
    overflow: "hidden",
   }
});

export default AppImageInput;