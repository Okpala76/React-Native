import { View, FlatList } from 'react-native'
import React, { useContext } from 'react'

import colors from '../config/colors'
import ProfileCard from '../components/ProfileCard'
import AppIcon from '../components/AppIcon'
import ListItemSeparator from '../components/ListItemSeparator'
import routes from '../navigation/routes'
import AuthContext from "../auth/context"

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
        },
        targetScreen: routes.MESSAGESSCREEN
    },
    
]


export default function AccountScreen({navigation}) {
const {user, setUser} = useContext(AuthContext);

  return (
    <View style = {{
        backgroundColor: colors.light,
        flex:1
    }}>
        <View>
        <ProfileCard 
            profileImage={require("../assets/mosh.jpg")}
            name={user.name}
            listings={user.email}
        />
        </View>

        <View style={{marginVertical: 20}}>

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
                        /> } 
                    onPress ={() => navigation.navigate(item.targetScreen)}
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
                />} 
            onPress = {() => setUser(null)}    
                
        />

      
    </View>
  )
}