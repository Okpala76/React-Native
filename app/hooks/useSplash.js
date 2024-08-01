import { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import authStorage from "../auth/storage";

export default function useSplash() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    const prepareApp = async () => {
      try {
        await restoreUser();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepareApp();
  }, []);

  return { user, setUser, isReady };
}
