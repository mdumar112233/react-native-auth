import React from 'react'
import { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import firebase from "firebase/app";
import "firebase/auth";

export default function HomeScreen({route, navigation}) {
    const email = route.params;
    // console.log(email.email);

    const userSignOut = () => {
        firebase.auth().signOut()
        .then(() => {
            navigation.navigate('SignUp')
        })
        .catch(err => {
            console.log(err.message);
        })
    }
    return (
        <View style={styles.container}>
            {
                email ? <Text style={{color: 'blue'}}>your login email = {email.email}</Text> : <Text>Login for more details</Text>
            }
            <Button title='logged out' onPress={userSignOut} />
            <Button style={{marginTop: 20}} title='signUp' onPress={() => navigation.navigate('SignUp')} />
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
