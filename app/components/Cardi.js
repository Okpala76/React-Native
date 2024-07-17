import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';

function Cardi({ title, subtitle ,image }) {
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardContainer} >

        <Card.Image source={image} />
        <Card.Divider />

      <View>

        <Card.Title 
          style={styles.cardTitle}
          fontWeight= {"bold"}
          >{title}
          
        </Card.Title>
        <Text style={styles.text} numberOfLines={numberOfLines}>
          {subtitle}
        </Text>

      </View>

      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    ///alignItems: "center"


  },
  cardContainer: {
    borderRadius: 20,
    height: "100%",
    overflow: 'hidden',
  
    width: '100%',// Sets the width of the Card
  },

  cardTitle: {
    textAlign: 'edge',
    paddingHorizontal:0,
    fontSize:20,
  },
  cardImage: {
    
    width: 170, // Makes the image take the full width of the card
    height: 190, // Sets a fixed height for the image
    borderRadius: 10, // Optional: Rounded corners for the image
  },
  text: {
    fontSize:20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "orange",
    marginHorizontal: 20,
    
    
  },
});

export default Cardi;
