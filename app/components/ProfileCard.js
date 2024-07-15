import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import colors from '../config/colors';

function ProfileCard({ 
  profileImage, 
  name, 
  listings, 
  onPress, 
  renderRightActions, 
  IconImage 
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor="#f8f4f4" onPress={onPress}>
        <View style={styles.container}>
          {IconImage}
          {profileImage && <Image source={profileImage} style={styles.image} />}
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{name}</Text>
            {listings && <Text style={styles.subtitle}>{listings}</Text>}
          </View>
          <MaterialCommunityIcons
            name={"chevron-down"}
            size = {25}
            color= {colors.dark}/>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height:"100",
    width:"100%",
    padding:10,
    backgroundColor: colors.white,
    
    
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    fontWeight:"bold"
  },
  title: {
    fontWeight: '500',
  },
  subtitle: {
    color: '#6e6969',
  },
});

export default ProfileCard;
