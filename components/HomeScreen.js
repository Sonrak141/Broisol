import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image, Platform, TouchableOpacity, ImageBackground } from 'react-native'
import { useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading'

const HomeScreen = ({navigation}) => {

  
    const [dataLoaded] = useFonts({
        'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('../assets/fonts/OpenSans-ExtraBold.ttf'),
      })
    
      if (!dataLoaded) {
        return <AppLoading />
      }
     
      
    
        return (
            <View style={styles.homeContainer}>
                <ImageBackground source={require('../assets/images/homeBG.jpeg')} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}> OrganiZen </Text>
                <Image source={require('../assets/images/logo.png')}/>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.btn}>
                    <Text style={styles.btnText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={styles.btn}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>
               
                </ImageBackground>
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
        fontFamily: 'open-sans-bold',
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
        textAlign: 'center',
        fontFamily: 'open-sans-bold',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    }
})

export default HomeScreen