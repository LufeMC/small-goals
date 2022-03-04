import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import Button from '../../../components/Button';
import TextEl from '../../../components/TextEl';
import Input from '../../../components/Input';
import { LinearGradient } from 'expo-linear-gradient';
import LoginOption from '../../../components/LoginOption';

const LoginRegisterTab = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <TextEl textAlign='center' style = {styles.subtitle} fontWeight='900' size = {30}>Hello!</TextEl>
                <TextEl textAlign='center'>Pleasure to meet you</TextEl>
            </View>
            <View style = {styles.content}>
                <View style = {styles.inputs}>
                    <Input placeholder='Name' type = 'default' value={name} onChange={setName} style = {{justifyContent: 'center'}}/>
                    <Input placeholder='Email address' type = 'email' value={email} onChange={setEmail} style = {{justifyContent: 'center'}}/>
                    <Input placeholder='Password' type = 'password' value={password} onChange={setPassword} style = {{justifyContent: 'center'}}/>
                </View>
                <View style = {styles.signInButton}>
                    <Button backgroundColor = '#fa6a69' textColor='white' action={() => {
                        navigation.navigate('Home')
                    }}>Register</Button>
                </View>
            </View>
            <View style = {styles.loginOptions}>
                <View style = {styles.continueText}>
                    <LinearGradient colors={['#ededf7', 'black']} start={[0.0, 0.5]} end={[1.0, 0.5]} style={styles.fadeInBox}></LinearGradient>
                    <TextEl style = {{flex: 1}} size = {12} textAlign = 'center' fontWeight='bold'>Or continue with</TextEl>
                    <LinearGradient colors={['black','#ededf7']} start={[0.0, 0.5]} end={[1.0, 0.5]} style={styles.fadeInBox}></LinearGradient>
                </View>
                <View style = {styles.loginOptionsButtons}>
                    <LoginOption path={require('../../../assets/google.png')} ></LoginOption>
                </View>
                <View style={styles.registerAsk}>
                    <TextEl size = {14} textAlign = 'center'>Already a member? </TextEl>
                    <TouchableOpacity style = {{backgroundColor: 'transparent'}} onPress = {() => {
                        navigation.navigate('LoginSignin')
                    }}>
                        <TextEl color='#fa6a69' size = {14} textAlign = 'center' fontWeight='bold'>Sign in</TextEl>
                    </TouchableOpacity>
                </View>
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
        flex: 3,
        justifyContent: 'center',
        alignContent: 'center'
    },
    subtitle: {
        marginTop: (Dimensions.get('window').height/100)*10
    },
    content: {
        flex: 4,
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        paddingHorizontal: (Dimensions.get('window').width/100)*5,
    },
    inputs: {
        flex: 7,
        width: '100%'
    },
    forgotPass: {
        flex: 2,
        alignSelf: 'flex-end',
        justifyContent: 'center'
    },
    signInButton: {
        flex: 3,
        width: '100%',
        justifyContent: 'center'
    },
    loginOptions: {
        flex: 3,
        // justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: (Dimensions.get('window').width/100)*5,
    },
    continueText: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    fadeInBox: {
        height: 2,
        flex: .5,
    },
    loginOptionsButtons: {
        flex: 7,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'stretch'
    },
    registerAsk: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

export default LoginRegisterTab