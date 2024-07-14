import { View, FlatList } from 'react-native'
import React from 'react'

import colors from '../config/colors'
import ProfileCard from '../components/ProfileCard'
import AppIcon from '../components/AppIcon'
import ListItemSeparator from '../components/ListItemSeparator'

const menuitem = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.tomato,
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.dodgerblue,
        }
    },
]


export default function AccountScreen() {


  return (
    <View style = {{
        backgroundColor: colors.light,
        flex:1
    }}>
        <View>
        <ProfileCard 
            profileImage={require("../assets/mosh.jpg")}
            name={"Mosh Hamedani"}
            listings={"Programswith" }
        />
        </View>

        <View style={{
            marginVertical:30,
            marginTop: 40,
            backgroundColor:colors.danger
        

        }}>

        <FlatList 
            data={menuitem}
            keyExtractor={(menu) => menu.title}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item }) => ( 
                
                <ProfileCard
                    name= {item.title}
                    IconImage = {
                        <AppIcon
                            name = {item.icon.name}
                            backgroundColor ={item.icon.backgroundColor}
                        />
                    } 
                
                /> 
             )}  
       
        />

        </View>

        <ProfileCard
            name= {"Log Out"}
            IconImage = {
                <AppIcon
                    name = {"logout"}
                    backgroundColor ={"#ffe66d"}
                />
            } 
                
        />

      
    </View>
  )
}