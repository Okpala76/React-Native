import { create } from 'apisauce';
import cache from '../utility/cache'

import authStorage from "../auth/storage"

const apiClient1 = create({
  baseURL: 'http://192.168.201.177:3000'
});

const apiClient2 = create({
  baseURL: 'http://192.168.83.177:9000/api'
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

