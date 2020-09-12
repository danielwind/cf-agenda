import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'

const LoginScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar style="auto" />

        <Button
            title="Login"
            onPress={() => navigation.navigate('Calendar')}
        />
        </View>
    );
}
 
export default LoginScreen;