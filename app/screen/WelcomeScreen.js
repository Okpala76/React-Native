import React from "react"
import styles from "./Styles";
import { View,ImageBackground, Image,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import AppButton from "../components/AppButton";




  export default function WelcomeScreen() {
    const navigation = useNavigation();
    
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/background.jpg')}
          resizeMode = "cover"
          blurRadius={3}
          style={styles.backgroundimage}       
        >
          <Image 
            style={styles.logo}
            source={require('../assets/logo-red.png')}
          />

          <Text 
            style={styles.text}
          >Sell what you dont need</Text>
          
          <View
          style={{
          flex: 0.15,
          alignitem: "center",  
          width: "100%",
          padding: 20

              
            }}
            >
              <AppButton colorr= "tomato" onPress={() => navigation.navigate("LoginScreen")} >LOGIN</AppButton>
              <AppButton colorr= "orange" onPress={() => navigation.navigate("RegisterScreen")}  >REGISTER</AppButton>
              
    
          </View>
        </ImageBackground> 
        

      </View>
    );
  };
  


 







  