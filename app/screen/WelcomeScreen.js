import React from "react"
import styles from "./Styles";
import { View,ImageBackground, Image,Text} from 'react-native';
import Login from "../components/Login";



  export default function WelcomeScreen() {
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
              <Login colorr= "tomato">LOGIN</Login>
              <Login colorr= "orange">LOGIN</Login>
              
    
          </View>
        </ImageBackground> 
        

      </View>
    );
  };
  


 







  