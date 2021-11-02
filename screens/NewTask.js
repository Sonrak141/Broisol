import React,{useState} from 'react'
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity} from 'react-native'
import {db} from '../constants/db.js'
import {Provider, useSelector} from 'react-redux'

const NewTask = () => {

const [textInput, settextInput] = useState('')
const [task, settask] = useState('')
const userLogin = useSelector(state => state.auth.userId)

    const handleOnChange = (t) => {
        settextInput(t)
        
    };
    const handleOnClick = () => {
        let object = {
            nombre: textInput,
            user: userLogin,
        }
        db.collection('tasks').add(object)
        settextInput('')
        
        }
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>New Task</Text>
            <TextInput
            style={styles.textInput}
            placeholder="Escribe el Task"
            placeholderTextColor="black"
            onChangeText={handleOnChange}
            value={textInput}
        />
        <TouchableOpacity onPress={handleOnClick} style={styles.btn}>
            <Text style={styles.text}>Add new text</Text>
        </TouchableOpacity>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },
  containerInput: {
    marginTop:40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderColor: "#CCDBBD",
    borderWidth: 2,
    width: 300,
    paddingHorizontal: 10,
    backgroundColor:'#CCDBBD',
    alignSelf: "center",
    height: 50,
    borderRadius:10
  },
  itemContainer: {
    marginTop: 30,
  },
  text: {
      justifyContent: "center",
      textAlign: 'center'
      
  },
  btn: {
      backgroundColor: '#CCDBBD',
      marginTop: 50,
      marginHorizontal: 100,
      paddingVertical:15,
      borderRadius: 10
      
  },
  textTitle: {
    justifyContent: "center",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom:20
    
    
},
  
});

export default NewTask
