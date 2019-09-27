import React, { useState, useContext } from 'react';
import  { View, StyleSheet } from 'react-native';
import  { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/spacer';
import {Context as AuthContext} from '../context/AuthContext'

const SignupScreen = ({navigation}) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    return (<View
            style={styles.container}
            >
        <Spacer>
            <Text
            h3
            >Sign Up for Tracker
            </Text>
        </Spacer>
            <Input
            label="Email"
            value={email}
            onChangeText={setEmail /*you could just use onChangeText={setEMail} */ }
            autoCapitalize="none"
            autoCorrect={false}
            />
        <Spacer />
            <Input
             label="Password"
             value={password}
             onChangeText={setPassword /*Just trying it the otherway for context */}
             autoCapitalize="none"
             autoCorrect={false}
             secureTextEntry
            />
        <Spacer>
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text>: null}
            <Button
             title="Sign up"
             onPress={() => signup({email, password})}
            />
        </Spacer>
        </View>
)};

SignupScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }

});

export default SignupScreen;