import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { Button, StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements';

export default function SignUpScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text style={{textAlign: 'center', marginTop: 20}}>Sign Up</Text>
            <View style={{marginTop: 30}}>
            <Input
                placeholder='Email'
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                secureTextEntry={true}
                placeholder='Password'
                value={password}
                onChangeText={text => setPassword(text)}
            />
            </View>

            <View style={{margin: 30}} >
            <Button title='signUp' onPress={()=> navigation.navigate('SignIn')}/>
            </View>
            <TouchableOpacity >
                <Text onPress={() => navigation.navigate('SignIn')} style={{textAlign: 'center'}}>Already have an account ?</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})
