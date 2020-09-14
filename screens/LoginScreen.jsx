import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import authService from './../services/auth.service'
import { StyleSheet, Text, View, Button } from 'react-native'

const LoginScreen = ({ navigation }) => {

    const [showAlert, setShowAlert] = useState(false)

    const login = async () => {
        const response = await authService.login({username: '', password: ''})
        console.log(`authService response: ${JSON.stringify(response)}`);
        if(!response.status) { 
            setShowAlert(true)
            return; 
        }
        navigation.navigate('Calendar')
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar style="auto" />

        <Button
            title="Login"
            onPress={() => login()}
        />
        </View>
    );
}
 
export default LoginScreen;