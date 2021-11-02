
   
import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import SignUp from '../screens/Signup'
import Login from '../screens/Login'


const Stack = createStackNavigator();
const AuthNavigator = () => {
    <Stack.Navigator initialRouteName='Home'>  
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={SignUp}/>
            
        </Stack.Navigator>
}
export default AuthNavigator