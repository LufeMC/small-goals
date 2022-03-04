import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

const LogoScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 1500)
    })

    return (
        <View style={styles.container}>
            {/* <Logo /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d897fd',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    }
});

export default LogoScreen