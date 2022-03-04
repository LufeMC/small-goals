import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { StyleSheet, View, Dimensions } from 'react-native';
import Button from '../../../components/Button';
import TextEl from '../../../components/TextEl';

const LoginWelcomeTab = ({ navigation }) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Image source = {require('../../../assets/home_image.svg')} style = {styles.image} resizeMode="contain"/>
            </View>
            <View style = {styles.content}>
                <TextEl textAlign='center' style = {styles.subtitle} fontWeight='900' size = {30}>One goal at a time</TextEl>
                <TextEl textAlign='center'>Set one goal per day and reach your dream</TextEl>
            </View>
            <View style = {styles.loginOptions}>
                <View style = {styles.buttons}>
                    <Button style={{flex:1}} action = {() => {
                        navigation.navigate('LoginRegister')
                    }}>Register</Button>
                    <Button backgroundColor = '#ededf7' style={{flex:1}} action = {() => {
                        navigation.navigate('LoginSignin')
                    }}>Sign In</Button>
                </View>
                {/* <TextEl size = {15} textAlign = 'center' style = {styles.noRegister}>Or enter without registering</TextEl> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ededf7',
        paddingHorizontal: (Dimensions.get('window').height/100)*1.5,
        paddingVertical: (Dimensions.get('window').height/100)*1.5
    },
    header: {
        flex: 5,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#d897fd',
        borderRadius: 40
    },
    image: {
        height: (Dimensions.get('window').width/100)*60
    },
    content: {
        flex: 3,
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        paddingHorizontal: (Dimensions.get('window').width/100)*5,
    },
    subtitle: {
        marginTop: (Dimensions.get('window').height/100)*10
    },
    loginOptions: {
        flex: 2,
        justifyContent: 'center',
        paddingHorizontal: (Dimensions.get('window').width/100)*5,
    },
    buttons: {
        // height: 100,
        borderColor: 'white',
        borderWidth: 2,
        borderStyle: 'solid',
        flexDirection: 'row',
        borderRadius: 10
    },
    noRegister: {
        marginTop: 20,
        textDecorationLine: 'underline'
    }
});

export default LoginWelcomeTab