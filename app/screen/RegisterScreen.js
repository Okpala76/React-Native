import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { SubmitButton, AppForm, AppFormField, ErrorMessage } from '../components/forms';
import Screen from '../components/Screen';
import usersApi from '../api/users';
import useAuth from '../auth/useAuth';
import authApi from '../api/auth';
import useApi from '../hooks/useApi';
import ActivityIndicator from '../components/ActivityIndicator';

//Yup validator
const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});



export default function RegisterScreen() {
  const registerApi = useApi(usersApi.register)
  const loginApi = useApi(authApi.login)
  const auth = useAuth();
  const [error, setError] = useState();


  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) console.log("error");
      else {
        setError('An unexpected error occured');
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.Login(authToken);
  };

  return (
    <>
    <ActivityIndicator visible= {registerApi.loading || loginApi.loading}/>
    <Screen style={styles.screen}>
      
      <AppForm
        initialValues={{ email: '', name: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="head"
          secureTextEntry={true}
          placeholder="Name"
          textContentType="name"
          name="name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          secureTextEntry={true}
          placeholder="Password"
          textContentType="password"
          name="password"
        />

        <SubmitButton color="red" title="Register" />
      </AppForm>
    </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});
