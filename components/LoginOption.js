import React from 'react';
import { Dimensions, StyleSheet, Image, View, Text,TouchableOpacity } from 'react-native';
import {
    Montserrat_400Regular,
    useFonts
} from '@expo-google-fonts/montserrat'

const LoginOption = ({style, path, action}) => {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular
    });

    return (
        <TouchableOpacity style = {[styles.container, style]} onPress = {action}>
            <View style = {styles.imageView}>
                <Image source = {path} style = {styles.image} resizeMode="contain"/>
            </View>
            {/* <View style = {styles.textView}>
                <Text style = {styles.text}>{children}</Text>
            </View> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderRadius: 15,
        borderColor: '#fff',
        marginVertical: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 7,
        paddingHorizontal: 10
    },
    imageView: {
        flex: 15
    },
    image: {
        // width: 'auto',
        height: (35/375) * Dimensions.get('window').width,
    },
    textView: {
        flex: 85,
        paddingLeft: 10
    },
    text: {
        fontFamily: 'Montserrat_400Regular',
        color: '#013A67',
        fontSize: (20/375) * Dimensions.get('window').width,
    }
});

export default LoginOption