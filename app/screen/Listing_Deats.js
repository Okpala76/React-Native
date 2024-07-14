import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cardi from '../components/Cardi'
import ProfileCard from '../components/ProfileCard';

function Listing_Deats() {
  return (
    <View style={styles.container}>
      <Cardi 
        title = "Red Jacket"
        subtitle = "$300"
      />
    <View style={styles.mosh}>
      <ProfileCard 
        profileImage={require('../assets/mosh.jpg')}
        name="Mosh Hamedani"
        listings="5 Listings"
      />
    </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  mosh: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'edge',
    backgroundColor: '#fff',
  },
  }
)

export default Listing_Deats