import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import InfoScreen from '../screens/InfoScreen'
import LocationScreen from '../screens/LocationScreen'
import TestScreen from '../screens/TestScreen'
const Stack = createStackNavigator()
const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }} >
                <Stack.Screen name='Test' component={TestScreen} />
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Info' component={InfoScreen} />
                <Stack.Screen name='Location' component={LocationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
