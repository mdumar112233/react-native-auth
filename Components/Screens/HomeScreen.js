import React from 'react'
import { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function HomeScreen() {
    const [email, setEmail] = useState('');
    return (
        <View style={styles.container}>
            <Text style={{margin: 20}}>You LoggedIn with this email{email}</Text>
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
