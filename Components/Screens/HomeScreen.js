import React from 'react'
import { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function HomeScreen({route}) {
    const email = route.params;
    console.log(email.email);
    // const [email, setEmail] = useState('');
    return (
        <View style={styles.container}>
            <Text>You LoggedIn with this email {email.email}</Text>
            <Button title='logged out' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
