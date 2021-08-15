import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import firebase from "firebase/app";
import { Button, StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements';
import { firebaseConfig } from '../../firebaseConfig';
import { Alert } from 'react-native';
import "firebase/auth";


if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }


export default function SignUpScreen({navigation}) {
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    // const [user, setUser] = useState({
    //     email: '',
    //     password: ''
    // })
    console.log(email.email, password.password);

    const userSignUp = () => {
        if(email.email && password.password){
            firebase.auth().createUserWithEmailAndPassword(email.email, password.password)
            .then((res) => {
                navigation.navigate('SignIn')
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
            <Text style={{textAlign: 'center', marginTop: 20}}>Sign Up</Text>
            <View style={{marginTop: 30}}>
            <Input
                placeholder='Email'
                // value={user.email}
                onChangeText={email => setEmail({email:email})}
                // onBlur={handleChange}
            />
            <Input
                secureTextEntry={true}
                placeholder='Password'
                // value={user.password}
                onChangeText={password => setPassword({password: password})}
            />
            </View>

            <View style={{margin: 30}} >
            <Button title='signUp' onPress={userSignUp}/>
            </View>

            <TouchableOpacity >
                <Text onPress={() => navigation.navigate('SignIn')} style={{textAlign: 'center'}}>Already have an account ?</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})
