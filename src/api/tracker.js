import axios from 'axios';
import  { AsyncStorage } from 'react-native';


const instance = axios.create({
    //ngok intance from 10/17/2019
    baseURL: 'http://b29dd248.ngrok.io'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log('config', config);
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }

);

export default instance;

