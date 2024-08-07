import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';


import { SubmitButton, AppForm, AppFormField } from '../components/forms';
import Screen from '../components/Screen';
import AppFormPicker from '../components/forms/AppFormPicker';
import FormImagePicker from '../components/forms/FormImagePicker';
import useLocation from '../hooks/useLocation';
import listingsApi from '../api/listings';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('name'),
  email: Yup.string().required().email().label('Email'),
  category: Yup.object().required().nullable().label('Category'),
  password: Yup.string().required().min(4).label('Password'),
  images: Yup.array().min(1, 'Please select at least one').label('images'),
});

const categories = [
  {
    label: 'Furniture',
    icon: 'floor-lamp',
    backgroundColor: '#fc5c65',
    value: 1,
  },
  { label: 'Car', icon: 'car', backgroundColor: '#fd9644', value: 2 },
  { label: 'Camera', icon: 'camera', backgroundColor: '#fed330', value: 3 },
  { label: 'Cards', icon: 'cards', backgroundColor: '#26de81', value: 4 },
  {
    label: 'Clothing',
    icon: 'shoe-heel',
    backgroundColor: '#2bcbba',
    value: 5,
  },
  { label: 'Sports', icon: 'basketball', backgroundColor: '#45aaf2', value: 6 },
  {
    label: 'Movies & Music',
    icon: 'headphones',
    backgroundColor: '#4b7bec',
    value: 7,
  },
];

export default function ListEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing , {resetForm}) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert('Could not save the listing.');
    }
    
    resetForm();
  };

  return (
    <Screen style={styles.screen}>

      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress = {progress}
        visible={uploadVisible}
      />

      <AppForm
        initialValues={{
          email: '',
          name: '',
          Password: '',
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />

        <View style={{ width: '90%' }}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="head"
            secureTextEntry={false}
            placeholder="Name"
            textContentType="name"
            name="name"
          />
        </View>

        <View style={{ width: '100%' }}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="email"
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
          />
        </View>

        <View style={{ width: '100%' }}>
          <AppFormPicker
            icon={'format-list-bulleted'}
            items={categories}
            name="category"
            placeholder="Category"
          />
        </View>

        <View style={{ width: '100%' }}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            secureTextEntry={true}
            placeholder="Password"
            textContentType="password"
            name="password"
          />
        </View>

        <SubmitButton color="red" title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});
