import React, {useEffect, useState} from 'react'
import { View, Text, SafeAreaView, StyleSheet, FlatList,TouchableOpacity } from 'react-native'
import{db} from '../constants/db';
import Task from './Task.js';
import {Provider, useSelector} from 'react-redux'

const TaskView = ({navigation}) => {
const [DATA, setDATA] = useState([])
const userLogin = useSelector(state => state.auth.userId)

const getTask =  ()=>{
    const docs = [];
    db.collection('tasks').onSnapshot((querySnapshot) =>{
        querySnapshot.forEach((doc) => {
          console.log(doc)
          if(doc.data().user === userLogin){
            docs.push({...doc.data(), id:doc.id})
          }
            
            });
        setDATA(docs)   
        })
    };

    useEffect(() => {
       getTask()
    }, [])
    // console.log(tasks)
    
    const renderItem = ({ item }) => (
        <View style={styles.item}>
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
      <TouchableOpacity onPress={()=>navigation.navigate('New')} style={styles.btn}>
        <Text>New Task</Text>
      </TouchableOpacity>
      </View>
    )


  
    }

    const styles = StyleSheet.create({
        container: {
          flex:1,
          marginTop:30,
          justifyContent: 'center',
          alignItems: 'center',
          
        },
        item: {
          alignItems: "center",
          backgroundColor: "#CAF0BB",
          paddingVertical: 40,
          paddingHorizontal:80,
          marginVertical: 10,
          marginHorizontal:10,
          borderRadius:20,
          shadowColor: "#000",
        },
        title: {
          fontSize: 32,
        },
        btn:{
        
          backgroundColor: "#FAFFF5",
          margin:20,
          paddingHorizontal:20,
          paddingVertical:10,
          borderRadius:10
      }
      });
export default TaskView


