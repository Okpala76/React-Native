 import React from 'react';
 import {  Button, StyleSheet, Text } from 'react-native';
 import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'
 import Screen from '../components/Screen';

 const Link = () => {
  const navigation = useNavigation();
    return (
      <Button
        title = "Click"
        onPress={() => navigation.navigate("TweetDetails", {id:"me"}) }
      />

    )
  }


const Tweets = () => (
  <Screen>
    <Text> Tweets</Text>
    <Link/>
  </Screen>
)

const TweetDetails = ({route}) => (
  <Screen>
  <Text> Tweets Details {route.params.id} </Text>
</Screen>
)

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor:"dodgerblue"},
      headerTintColor:"white",

    }}
  >
    <Stack.Screen name= "Tweets" component={Tweets} />
    <Stack.Screen 
      name= "TweetDetails" 
      component={TweetDetails}
      options= {{
      }}
    />
  </Stack.Navigator>
)


const Account = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions = {{
      tabBarInactiveBackgroundColor: "white",
      tabBarActiveTintColor: "tomato"
      
    }}
  >
    <Tab.Screen name = "Feed" component = {StackNavigator}/>
    <Tab.Screen 
      name = "Account"  
      component = {Account}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
      />
  </Tab.Navigator>
)


function Play() {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
    
  );
}




export default Play;