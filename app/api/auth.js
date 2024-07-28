import apiclient from './client';

const login = (email,password) => apiclient.apiClient2.post('/auth', {email,password})

export default {
    login,
}