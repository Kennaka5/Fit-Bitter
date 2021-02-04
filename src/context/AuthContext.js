import AsyncStorage from '@react-native-async-storage/async-storage';
// AsyncStorage is set to be deprecated from the react native libary keep and eye out for a libary change
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signin':
            return {errorMessage: '', token: action.payload };
        case 'clear_error_message':
            return{...state, errorMessage: ''}
        case 'signout':
            return { errorMessage: '', token: null };
        default:
            return state;
    };
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({type: 'signin', payload: token});
        navigate('TrackList')
    } else {
        navigate('loginFlow')
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
} 

const signup = (dispatch) => async ({email, password}) => {
        //make api request to sign up with those credentials
        try {
            const response = await trackerApi.post('/signup', {email, password});
                await AsyncStorage.setItem('token', response.data.token)
             console.log('response: ', response.data) // this gives back the token 
            dispatch({type: 'signin', payload: response.data.token});
            //create function to navigate to main flow
            navigate('TrackList')

        } catch (error) {
            //if signing up fails sed error message
            dispatch({type: 'add_error', payload: 'Something went wrong with signing up'})
            console.log(error);
        }
        // if we sign up, modify our state, and say that we are authenticated

        //if signing up fails sed error message
    }


const signin = (dispatch) =>  async ({email, password}) => {
        //make api request to sign in with those credentials
        try {
            const response = await trackerApi.post('/signin', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
                dispatch({
                    type: 'signin',
                    payload: response.data.token
            })
            navigate('TrackList')
        } catch(error) {
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with sign in'
            })
        }
        // if we sign in, modify our state, and say that we are authenticated

        //if signing up fails sed error message
    }

const signout = dispatch => async () => {
        //somehow sign out
        await AsyncStorage.removeItem('token');
        dispatch({type: 'signout'})
        navigate('loginFlow')
    }


export const {Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout, clearErrorMessage, tryLocalSignin},
    { token: null, errorMessage: '' }
);