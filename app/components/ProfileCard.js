
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import colors from '../config/colors';

import { MaterialCommunityIcons } from "@expo/vector-icons";

function ProfileCard({
  profileImage,
  name,
  listings,
  onPress,
  renderRightActions,
  IconImage,
  showChevrons,
  numberOfLines
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor="#f8f4f4" onPress={onPress}>
        <View style={styles.container}>
          {IconImage}
          {profileImage && <Image source={profileImage} style={styles.image} />}
          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={numberOfLines}>{name}</Text>
            {listings && <Text style={styles.subtitle } numberOfLines= {numberOfLines} >{listings}</Text>}
          </View>

          {showChevrons && (
            <View style={styles.chevronContainer}>
              <MaterialCommunityIcons
                name={"chevron-down"}
                size={25}
                color={colors.dark}
              />
            </View>
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colors.light,
    alignItems: 'center',
    paddingTop: 10 // Ensures all items are centered vertically
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
    
  },
  subtitle: {
    color: '#6e6969',
   
  },
  chevronContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',

  }
});

export default ProfileCard;
