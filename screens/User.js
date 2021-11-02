import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Provider, useSelector} from 'react-redux'

const User = () => {
    const userLogin = useSelector(state => state.auth.userId)
    return (
        <View>
            <Text style={styles.textTitle}>User</Text>
            <Text style={styles.text}>Useri ID:</Text>
            <Text style={styles.text}>{userLogin}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textTitle: {
        justifyContent: "center",
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom:20,
        marginTop: 100
    },
    text:{
        justifyContent: "center",
        textAlign: 'center',
        fontSize:18,
        marginBottom: 15 
    }
})

export default User
