import { View, Text } from 'react-native'
import React from 'react'


import ProfileCard from '../components/ProfileCard'

export default function Play() {
  return (
    <View>

      <ProfileCard
        profileImage = {require("../assets/mosh.jpg")}
        name = "Merkel"
        showChevrons = {true}
      />
    </View>
    
  )
}