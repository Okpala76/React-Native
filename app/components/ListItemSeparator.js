import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function ListItemSeparator() {
  return (
    <View style={styles.container}
    >
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        height: 1,
        
    }

})