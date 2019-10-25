import axios from 'axios';
import  { AsyncStorage } from 'react-native';


const instance = axios.create({
    //ngok intance from 10/24/2019
    baseURL: 'https://5be37a1f.ngrok.io'
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
        return Promise.reject(err);
    }

);

export default instance;

