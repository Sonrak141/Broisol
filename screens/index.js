import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import User from '../screens/User.js'
import TaskNavigator from '../navigation/TaskNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Provider, useSelector} from 'react-redux'
import store from '../store';
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import Signup from '../screens/SignUp'
import Login from '../screens/Login'


const Stack = createStackNavigator();


export default function Index() {
  const userLogin = useSelector(state => state.auth.userId)

  const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
        {userLogin
          ?
          <Tab.Navigator>
            <Tab.Screen name="Tasks" component={TaskNavigator} options={{headerShown:false}}/>
            <Tab.Screen name="Profile" component={User} options={{headerShown:false}} />
          </Tab.Navigator>
        
        : 
        <Stack.Navigator initialRouteName='Home'>  
            <Stack.Screen name='Home' component={Home}  options={{headerShown: false}}/>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup}/>
            
        </Stack.Navigator>
      

        }
        </NavigationContainer>
    )

      }

const styles = StyleSheet.create({
  container: {
    
  },
})