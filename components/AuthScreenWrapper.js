import React from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const AuthScreenWrapper = ({children, title, message, path, btnText}) => {
    const navigation = useNavigation()
    return (
        <KeyboardAvoidingView
        behavior="height"
        style={styles.screen}
        >
            <View>
                <Text style={styles.title}>{title}</Text>
                {children}
                <View style={styles.prompt}>
                    <Text style={styles.promptMessage}>{message}</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate(path)}>
                        <Text style={styles.promptBtn}>{btnText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize:24,
        marginBottom:18,
        textAlign: 'center'
    },
    prompt:{

    },
    promptBtn:{

    },
    promptMessage:{

    }
})
export default AuthScreenWrapper