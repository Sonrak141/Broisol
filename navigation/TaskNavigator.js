import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import NewTask from '../screens/NewTask.js'
import TaskList from '../screens/TaskList.js'
import Home from '../screens/Home'
import TaskView from '../components/TaskView.js'

const Stack = createStackNavigator();

const TaskNavigator = () => (
    
        <Stack.Navigator initialRouteName='List'>  
            <Stack.Screen name='List' component={TaskView} />
            <Stack.Screen name='New' component={NewTask}/>
            
        </Stack.Navigator>
    
)

export default TaskNavigator