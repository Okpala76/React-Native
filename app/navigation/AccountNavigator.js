import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import MessagesScreen from "../screen/MessagesScreen";
import AccountScreen from "../screen/AccountScreen";

const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator gestureDirection = "horizontal" >
        <Stack.Screen name = "AccountScreen" component={AccountScreen}  />
        <Stack.Screen name = "MessagesScreen" component={MessagesScreen} 
            options={{
                cardStyleInterpolator: forFade
            }} />

    </Stack.Navigator>
)


export default AccountNavigator;