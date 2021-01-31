import axios from 'axios';
import  { AsyncStorage } from 'react-native';


const instance = axios.create({
    //ngok intance from 10/24/2019
    baseURL: 'http://730c94b43924.ngrok.io'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log('token', token, 'config', config)
        return config;
    },
    (err) => {
        return Promise.reject('token: ', err);
    }

);

export default instance;

