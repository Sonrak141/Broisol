import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Task = (item) => {
    return (
        <View style={styles.container}>
            <Text>{item.nombre}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    }
})

export default Task
