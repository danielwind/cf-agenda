import React from 'react'

//navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import i18n from './i18n/i18n'

//screens
import LoginScreen from './screens/LoginScreen'
import CalendarScreen from './screens/CalendarScreen'
import OrderScreen from'./screens/OrderScreen'

export default function App() {

  const Stack = createStackNavigator();

  const headerStyle = { 
    title: i18n.t('appTitle'),
    headerStyle: {
      backgroundColor: '#FF1493'
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
      fontSize: 16,
      fontWeight: 'normal'
    },
    headerTitleAlign: 'center'
  }

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown:false }} />
        <Stack.Screen name="Calendar" component={CalendarScreen} options={headerStyle}/>
        <Stack.Screen name="Order" component={OrderScreen} options={headerStyle}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}


//colors
//dark pink: #e73e97
//light pink: #f4b5d2
//turquoise: #00b1b0
//green: #8bc53b
//orange: #f26532
