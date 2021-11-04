import React,{useState} from 'react'
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Image, Alert} from 'react-native'
import {db} from '../constants/db.js'
import {Provider, useSelector} from 'react-redux'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system';


const NewTask = () => {

const [textInput, settextInput] = useState('')
const [task, settask] = useState('')
const [imageUri, setimageUri] = useState()
const userLogin = useSelector(state => state.auth.userId)


    const handleOnChange = (t) => {
        settextInput(t)
        
    };
    const handleOnClick = () => {
        let object = {
            nombre: textInput,
            user: userLogin,
            imagen: imageUri,
        }
        db.collection('tasks').add(object)
        settextInput('')
        setimageUri()
        
        }
    const verifyCamera = async () => {
        const {status} = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted'){
            Alert.alert(
                'Need camera permissions'
                [{text:'Ok'}]
                )
            return false;    
        }else{
            return true;
        }
    }     
    const handleOnClickImage = async () => {
        const isCameraOk = await verifyCamera();
        if(!isCameraOk) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect:[16,9],
            quality: 1
        })

        
        console.log(image)
        setimageUri(image)

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
        <View style={styles.imageContainer}>
            {!imageUri
            ? <Text>No ha seleccionado imagen</Text>
            : <Image style={styles.image} source={{uri: imageUri.uri}}/>}
        </View>
        <TouchableOpacity onPress={handleOnClickImage} style={styles.btn}>
            <Text style={styles.text}>Add Image</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOnClick} style={styles.btn}>
            <Text style={styles.text}>Add new task</Text>
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
image: {
    height:'50%',
    width:'50%',
    marginHorizontal:80
},
imageContainer: {
    alignContent: "center",
    justifyContent: "center"
}
  
});

export default NewTask
