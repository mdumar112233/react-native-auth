import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { Button, StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements';
import firebase from "firebase/app";
import "firebase/auth";
import { Alert } from 'react-native';

// firebase.auth().signInWithEmailAndPassword(user.email, user.password)
export default function SignInScreen({navigation}) {
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});


    const userSignIn = () => {
        if(email.email && password.password){
            firebase.auth().signInWithEmailAndPassword(email.email, password.password)
            .then((res) => {
                navigation.navigate('Home', {
                    email: email.email
                })
            })
            .catch(err => {
                Alert.alert(err.message)
            })
        } else{
            console.log('user info is not coming');
        }
    }; 
    return (
        <View>
            <Text style={{textAlign: 'center', marginTop: 20}}>Sign In</Text>
            <View style={{marginTop: 30}}>
            <Input
                placeholder='Email'
                // value={email}
                onChangeText={email => setEmail({email:email})}
            />
            <Input
                secureTextEntry={true}
                placeholder='Password'
                // value={password}
                onChangeText={password => setPassword({password: password})}
            />
            </View>

            <View style={{margin: 30}} >
            <Button title='login' onPress={userSignIn}/>
            </View>

            <TouchableOpacity >
                <Text onPress={() => navigation.navigate('SignUp')} style={{textAlign: 'center'}}>Don't have an account ?</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})
