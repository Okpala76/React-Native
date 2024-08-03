import { create } from 'apisauce';
import cache from '../utility/cache'

import authStorage from "../auth/storage"
import settings from '../config/settings';


const apiClient1 = create({
  baseURL: settings.apiUrl 
});

const apiClient2 = create({
  baseURL: settings.apiUrl
});


 apiClient2.addAsyncRequestTransform( async (request) => {
   const authToken = await authStorage.getToken();
   if (!authToken) return;
   request.headers['x-auth-token'] = authToken;
 });


const get = apiClient2.get;
apiClient2.get = async (url, params,axiosConfig) => {

 const response = await get(url, params,axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    console.log('I have received the data from the server')
    return response;
  }

  const data = await cache.get(url);
  return data ? {ok: true, data} : response;
}

export default {
  apiClient1,
  apiClient2,
};

