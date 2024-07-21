import { View, FlatList, StyleSheet } from 'react-native'
import React from 'react'


import Cardi from '../components/Cardi'


const lisings =[
    {
        title: "Slick Red Jacket ",
        price: "100",
        image: require("../assets/jacket.jpg")

    },
    {
        title: "Couch in Great Condition ",
        price: "1000",
        image: require("../assets/couch.jpg")

    },
]

export default function ListingScreen() {
  return (
    <View style={styles.container}>
        <FlatList
            data = {lisings}
            keyExtractor={(list) => {list.title}}
            renderItem= {({item}) => 
                <Cardi
                    title = {item.title}
                    subtitle = {"$"+item.price}
                    image = {item.image}
                    
                />

                
            }
        />
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        paddding:0
    }
    
})