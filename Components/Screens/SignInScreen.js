import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { Button, StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements';

export default function SignInScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text style={{textAlign: 'center', marginTop: 20}}>Sign In</Text>
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
            <Button title='login' onPress={()=> navigation.navigate('SignIn')}/>
            </View>
            <TouchableOpacity >
                <Text onPress={() => navigation.navigate('SignUp')} style={{textAlign: 'center'}}>Don't have an account ?</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})
