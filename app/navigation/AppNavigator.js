import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons"

import ListEditScreen from '../screen/ListEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';



const Tab = createBottomTabNavigator();


const TabNavigator = () => (
  <Tab.Navigator
    screenOptions = {{
      tabBarInactiveBackgroundColor: "white",
      tabBarActiveTintColor: "tomato"
      
    }}
  >
    <Tab.Screen name = "Account" component = {AccountNavigator} 
    options={{
      tabBarIcon: ({color , size}) => 
          <MaterialCommunityIcons name = "home" color={color} size={size}/>
    }} />

    <Tab.Screen name = "Feed" component = {FeedNavigator}
    options={ ({navigation})=> ({
      headerShown:false,
      tabBarButton: () => <NewListingButton onPress={() => navigation.navigate("Feed")} />,
      tabBarIcon: ({color , size}) => 
          <MaterialCommunityIcons name = "plus-circle" color={color} size={size}/>
    })} />

    <Tab.Screen name = "ListEditScreen" component = {ListEditScreen}
    options={{
      tabBarIcon: ({color , size}) => 
          <MaterialCommunityIcons name = "account" color={color} size={size}/>
    }} />

      
  </Tab.Navigator>

  )

  export default TabNavigator;
