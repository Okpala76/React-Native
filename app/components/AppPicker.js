import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button,FlatList } from 'react-native'
import React, {useState} from 'react'
import {MaterialCommunityIcons} from "@expo/vector-icons"


import colors from '../config/colors'
import Screen from './Screen'
import AppText from './AppText'
import CategoryItem from './CategoryItem'




export default function AppPicker({icon, selectedItems,onSelectedItems, items, placeholder}) {
    const [modalVisible, setModalVisible] = useState(false);
    
    let label;
    if (selectedItems) {
        label = selectedItems.label;
    } else {
        label = placeholder;
    }

  return (
<>
    <TouchableWithoutFeedback
      onPress = {() => setModalVisible(true)}
    >
    <View style={styles.container }>
        
        {icon && <MaterialCommunityIcons
            name={icon}
            size = {25}
            color= {colors.dark}
            style ={styles.icon}
        />}

        <AppText style={{flex:1, color: "#6e6969", fontSize: 15}}>
          {label}
        </AppText>

        <MaterialCommunityIcons
            name={"chevron-down"}
            size = {25}
            color= {colors.dark}
            
        />
    
      </View>
    </TouchableWithoutFeedback>


    <Modal
       visible={modalVisible}
       animationType='slide'>
      <Screen>
        <Button
          title = "Close"
          onPress={() => setModalVisible(false)}
        />
        
          
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          numColumns={3}
          renderItem={({item }) => 
            <CategoryItem
              name= {item.label}
              icon = {item.icon}
              backgroundColor= {item.backgroundColor}

              onPress={() => 
                {setModalVisible(false)
                 onSelectedItems(item) 
                }

              }
            />
          }
        />
       

      
      </Screen>

    </Modal>

</>

  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: " 100%",
        padding: 15,
        marginVertical:10,
        justifyContent: "flex-start",
        alignItems: "center",
    },

    icon:{
        margin: 10

    },
    modal:{
      padding :10,
      paddingTop:10,
    }

    
})