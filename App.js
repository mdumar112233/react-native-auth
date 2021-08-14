import { StatusBar } from 'expo-status-bar';
import React from 'react';
import firebase from "firebase/app";
import { StyleSheet, Text, View } from 'react-native';
import { firebaseConfig } from './firebaseConfig';
import StackNavigation from './Components/StackNavigatoin/StackNavigation';


if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }

export default function App() {
  return (
    <View style={styles.container}>
      <StackNavigation/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
