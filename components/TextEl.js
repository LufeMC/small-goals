import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Dimensions } from 'react-native';
import {
    Montserrat_400Regular,
    useFonts
} from '@expo-google-fonts/montserrat'

const TextEl = ({children, size = 20, color = '#000', textAlign = 'flex-start', limit = '', fontWeight = 'normal', style = {}}) => {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular
    });

    return (
        <Text style = {[styles.text, style, {fontSize: (size/375) * Dimensions.get('window').width, color, textAlign, fontWeight}]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Montserrat_400Regular',
    }
});

export default TextEl