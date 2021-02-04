import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const instance = axios.create({
    //ngok intance from 2/03/2021
    baseURL: 'http://1c4422f2d789.ngrok.io'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log('token insance', token, 'config', config)
        return config;
    },
    (err) => {
        return Promise.reject('token: ', err);
    }

);

export default instance;

