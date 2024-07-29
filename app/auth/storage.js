import  * as SecureStore from 'expo-secure-store'
import { jwtDecode } from 'jwt-decode';



const key = "authToken";

const storeToken = authToken => {
    try {
        SecureStore.setItemAsync(key, authToken);
        
    } catch (error) {
        console.log('Error storing the auth token', error)
    }

}

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key)
        
    } catch (error) {
        console.log('Error getting auth token', error)
        
    }
}

const getUser = async () => {
    const token = await getToken();
    if (token) return jwtDecode(token);
    return null;

}

const removeToken =  () => {
    try {
         SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log('Error removing the auth token', error);
    }
}

export default {getUser, storeToken,removeToken, getToken}