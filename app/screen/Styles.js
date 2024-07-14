import { StyleSheet} from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingTop:30,

    },
    backgroundimage: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: "center",
      

    },
    logo: {
      resizeMode: 'cover',
      width:70,
      height:70, 
      position: "absolute",
      top:70, 
      alignItems: "center"
    },
    iconContainer: {
      backgroundColor: colors.black, // Ensure you have a black color defined
      flex: 0.15,
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 20,
    },
    text: {
      color: "black",
      fontWeight: "600",
      position: "absolute",
      top:140, 
      alignItems: "center",
  
    },
    image: {

    }
    }
  );

export default styles