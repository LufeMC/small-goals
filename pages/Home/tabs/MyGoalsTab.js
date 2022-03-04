import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import Button from '../../../components/Button';
import TextEl from '../../../components/TextEl';
import Input from '../../../components/Input';
import { LinearGradient } from 'expo-linear-gradient';
import LoginOption from '../../../components/LoginOption';
import { FlatList } from 'react-native';
import PastGoal from '../../../components/PastGoal';

const MyGoalsTab = ({ navigation }) => {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            name: 'First Item',
            date: new Date().toLocaleDateString()
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            name: 'Second Item',
            date: new Date().toLocaleDateString()
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            name: 'Third Item',
            date: new Date().toLocaleDateString()
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={{ backgroundColor: 'transparent' }} onPress={() => {
                    navigation.navigate('Home')
                }}>
                    <TextEl size={15} color='#fff' fontWeight='bold'>Go Back</TextEl>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={DATA}
                    renderItem={PastGoal}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d897fd',
        paddingHorizontal: (Dimensions.get('window').height / 100) * 1.5,
        paddingVertical: (Dimensions.get('window').height / 100) * 1.5
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: (Dimensions.get('window').height / 100) * 1.5,
    },
    content: {
        flex: 9
    },
});

export default MyGoalsTab