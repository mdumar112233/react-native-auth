import React from 'react'
import { ActivityIndicator } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

export default function LoadingScreen() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color='#d9534f'  />
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
