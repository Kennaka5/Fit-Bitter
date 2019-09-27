import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
        return {...state, errorMessage: action.payload}
        default:
            return state;
    };
};

const signup = (dispatch) => {
    return async ({email, password}) => {
        //make api request to sign up with those credentials
        try {
            const response = await trackerApi.post('/signup', {email, password});
            console.log(response.data) // this gives back the token
        } catch (error) {
            //if signing up fails sed error message
            dispatch({type: 'add_error', payload: 'Something went wrong with signing up'})
            console.log(error);
        }
        // if we sign up, modify our state, and say that we are authenticated

        //if signing up fails sed error message
    }
}

const signin = (dispatch) => {
    return ({email, password}) => {
        //make api request to sign in with those credentials

        // if we sign in, modify our state, and say that we are authenticated

        //if signing up fails sed error message
    }
}

const signout = (dispatch) => {
    return ({email, password}) => {
        //somehow sign out

    }
}

export const {Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout},
    { isSignedIn: false, errorMessage: '' }
);