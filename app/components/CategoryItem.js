import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Screen from './Screen';

function CategoryItem({ name, icon, backgroundColor,onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      

      <View style={[styles.container, { backgroundColor }]}>
        <MaterialCommunityIcons name={icon} size={30} color="#fff" />
        
      </View>
      <View style={styles.screen}>
      <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
      width: 100,
      height:100,
      borderRadius:50,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      marginBottom: 10,
      
  },
  text: {
    color: 'black',
    marginTop: 10,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
  },
  screen: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CategoryItem;
