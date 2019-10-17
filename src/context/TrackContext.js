import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';


const trackReducer = (state, action) => {
    switch (action.type) {
        default:
        return state;
    }
};

const fetchTracks = dispatch => () => {

};

const createTrack = dispatch => async (name, locations) => {
    //make a request to api
    console.log('befor post post', name, locations)
    await trackerApi.post('/tracks', {name, locations});
    // console.log('after post')
    //test for working action
    // console.log('create track:', name, locations.length)
};

export const {Provider, Context } = createDataContext(
    trackReducer,
    {fetchTracks, createTrack},
    []
);