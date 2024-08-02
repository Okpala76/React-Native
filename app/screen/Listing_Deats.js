import React, { useState } from 'react';
import Constants from 'expo-constants';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Alert,
} from 'react-native';
import ProfileCard from '../components/ProfileCard';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import * as Yup from 'yup';
import {
  usePushNotifications,
  sendPushNotification,
} from '../hooks/usePushNotification';
import send from '../api/messages';

const validationSchema = Yup.object().shape({
  message: Yup.string().required().label('Message'),
});
function Listing_Deats({ route }) {
  const listing = route.params;
  const { expoPushToken } = usePushNotifications();

  const handleSubmit = async (userInfo , { resetForm }) => {
    const title = 'You sent a message ';
    const body = userInfo.message;
    const data = { screen: 'Listing_Deats' };

    const result = await send(userInfo.message, listing.id);

    if (!result.ok) {
      console.log('Error', result);
      return Alert.alert('Error', 'Could not send message');
    }

    await sendPushNotification(expoPushToken, title, body, data);
    resetForm();
  };

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: listing.images[0].url }} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.price}> ${listing.price}</Text>
        </View>

        <View style={styles.mosh}>
          <ProfileCard
            profileImage={require('../assets/mosh.jpg')}
            name="Mosh Hamedani"
            listings="5 Listings"
          />

          <View style={styles.messages}>
            <AppForm
              initialValues={{ message: '' }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={false}
                placeholder="Messages..."
                textContentType="name"
                name="message"
              />

              <SubmitButton color="red" title="Contact Form" />
            </AppForm>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  mosh: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'edge',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%', // Makes the image take the full width of the card
    height: '30%', // Sets a fixed height for the image
  },
  detailsContainer: {
    margin: 10,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  title: {
    textAlign: 'edge',
    fontSize: 20,
    marginVertical: 10,
  },
  price: {
    textAlign: 'edge',
    color: 'orange',
    fontSize: 20,
    marginVertical: 10,
  },
  messages: {
    marginTop: 40,
  },
});

export default Listing_Deats;
