import React, {useEffect, useState} from 'react'
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import{db} from '../constants/db';
import Task from './Task.js';

const TaskView = () => {
const [DATA, setDATA] = useState([])
const getTask =  ()=>{
    const docs = [];
    db.collection('tasks').onSnapshot((querySnapshot) =>{
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id:doc.id})
            });
        setDATA(docs)   
        })
    };

    useEffect(() => {
       getTask()
    }, [])
    // console.log(tasks)
    const renderItem = ({ item }) => (
        <View>
        <Text>{item.nombre}</Text>
        <Text>{item.id}</Text>
        </View>
      );
    return(
        <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    )


  
    }

    const styles = StyleSheet.create({
        container: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        item: {
          backgroundColor: '#f9c2ff',
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
        },
        title: {
          fontSize: 32,
        },
      });
export default TaskView


