import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import User from './screens/User'
import TaskNavigator from './navigation/TaskNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Provider, useSelector} from 'react-redux'
import store from './store';
import {createStackNavigator} from '@react-navigation/stack'
import Home from './screens/Home'
import Signup from './screens/SignUp'
import Login from './screens/Login'
import Index from './screens/index'


const Stack = createStackNavigator();


export default function App() {
 
  if (Platform.OS === 'ios') {
    return (
      
      <Provider store={store}>
        <Index/>
      </Provider>
      
    )
  }else{
    return (
      <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Index/>
      </Provider>
      </SafeAreaView>
    )
  }

    }

const styles = StyleSheet.create({
  container: {
    flex:1
  },
})
