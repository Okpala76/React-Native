import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screen/ListingScreen";
import Listing_Deats from "../screen/Listing_Deats";

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator screenOptions = {{headerShown:false}} gestureDirection = "horizontal" >
        <Stack.Screen name = "ListingScreen" component={ListingScreen} />
        <Stack.Screen name = "Listing_Deats" component={Listing_Deats}  />
    </Stack.Navigator>
)


export default FeedNavigator;