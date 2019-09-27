import React from 'react';
import  { View, StyleSheet, Text, Button } from 'react-native';

const TrackListScreen = ({navigation}) => {
    return (
        <>
        <Text style={{ fontSize: 48}}>
            Track List Screen
        </Text>
        <Button
        title="go to Track Detail"
        onPress={() => navigation.navigate('TrackDetail')}
        >

        </Button>
        <Button
        title="go to main flow"
        onPress={() => navigation.navigate('mainFlow')}
        >

        </Button>
        </>
)};

const styles = StyleSheet.create({

});

export default TrackListScreen;