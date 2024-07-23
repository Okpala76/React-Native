import React from 'react';
import { View, StyleSheet } from 'react-native';


import colors from '../config/colors';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';

function NewListingButton({onPress}) {
  return (
     <TouchableOpacity onPress={onPress}>

    <View style={styles.container}>
        <MaterialCommunityIcons
            name = "plus-circle"
            color = {colors.white}
            size={30}
        />
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor:colors.primary,
    borderRadius:30,
    borderColor:colors.white,
    borderWidth: 10,
    bottom:20,
    height:60,
    justifyContent: "center",
    width:60,

  }
});

export default NewListingButton;