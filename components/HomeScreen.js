import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image, Platform, TouchableOpacity, ImageBackground } from 'react-native'
import { useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading'

const HomeScreen = ({navigation}) => {

  
    
     
      
    
        return (
            <View style={styles.homeContainer}>
                
                <Text style={styles.text}> OrganiZen </Text>
                
                <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.btn}>
                    <Text style={styles.btnText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={styles.btn}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>
               
               
            </View>
        )
    

}

const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: '#7E8F6D',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    text:{
        color: '#FAFFF5',
        fontSize:50,
    
        textAlign: 'center'
    },
    btn:{
        backgroundColor: '#FAFFF5',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 20,
        marginTop:80,
        width:200,
        
        
    },
    btnText:{
        fontSize:25,
        color: '#656565',
        textAlign: 'center'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    }
})

export default HomeScreen