import React from 'react';
import {Input, Button } from 'react-native-elements';
import Spacer from './spacer';

const TrackForm = () => {
    return(
        <>
        <Spacer>
        <Input 
            placeholder="Enter name"
        />
        </Spacer>
        <Button 
            title='track create'
        />
        </>
    )
}

export default TrackForm;