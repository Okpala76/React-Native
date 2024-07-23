import React from 'react';
import Constants from "expo-constants";
import { View, StyleSheet,Image,Text } from 'react-native';
import ProfileCard from '../components/ProfileCard';


function Listing_Deats({route}) {
  const listing = route.params;

  return (
    <View style={styles.container}>

      <Image style ={styles.image} source = {{uri: listing.images[0].url}} />
      <View style = {styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price} > ${listing.price}</Text>
     </View>

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
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight

  },
  mosh: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'edge',
    backgroundColor: '#fff',
  },
  image: {
    width: "100%", // Makes the image take the full width of the card
    height: "30%", // Sets a fixed height for the image
    
  },
  detailsContainer:{
    
    margin: 10,
    fontWeight: "bold",
    marginHorizontal: 20,  
  },
  title:{
    textAlign: 'edge',
    fontSize:20,  
    marginVertical: 10,
    
  },
  price:{
    textAlign: 'edge',
    color: "orange",
    fontSize:20,  
    marginVertical: 10,  
  },

  }
)

export default Listing_Deats