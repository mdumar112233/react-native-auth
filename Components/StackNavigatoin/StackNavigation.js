import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../Screens/SignUpScreen';
import SignInScreen from '../Screens/SignInScreen';
import LoadingScreen from '../Screens/LoadingScreen';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createNativeStackNavigator();

function StackNavigation({route}) {
  if(route){
    const email = route.params;
    console.log('stack page', email);
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen options={{headerShown: false}} name="loading" component={LoadingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;