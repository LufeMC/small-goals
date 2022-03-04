import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Image, Modal, Pressable, Text } from 'react-native';
import Button from '../../../components/Button';
import TextEl from '../../../components/TextEl';
import Input from '../../../components/Input';
import { LinearGradient } from 'expo-linear-gradient';
import LoginOption from '../../../components/LoginOption';
import SetNewGoal from './SetNewGoal';

const HomeTab = ({ navigation }) => {
    const [pictureNumber, setPictureNumber] = useState('')
    const [goal, setGoal] = useState('Teste')
    const [goalSet, setGoalSet] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        setPictureNumber(Math.floor(Math.random() * 8) + 1)
    }, [])

    const changeGoal = (new_goal) => {
        setGoal(new_goal)
        setGoalSet(true)
    }

    return (
        <View style={styles.container}>
            <SetNewGoal action = {changeGoal} modalVisible = {modalVisible} changeModalVisibility = {setModalVisible}/>
            <View style={styles.header}>
                <TouchableOpacity style={{ backgroundColor: 'transparent' }} onPress={() => {
                    navigation.navigate('MyGoals')
                }}>
                    <TextEl size={15} color='#fff' fontWeight='bold'>My Goals</TextEl>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                {pictureNumber === '' ? null : (
                    <Image source={require(`../../../assets/${pictureNumber}.svg`)} style={styles.image} resizeMode="contain" />
                )}
                <View style={{ flex: 4, justifyContent: 'center' }}>
                    <TextEl textAlign='center' size={30} color='#fff' fontWeight='bold'>
                        {goalSet === false ?
                            "You still don't have a goal for today. Add a goal now!"
                            :
                            `Today's goal: ${goal}`}
                    </TextEl>
                </View>
            </View>
            <View style={styles.button}>
                {goalSet === false ? (
                    <Button action={() => setModalVisible(!modalVisible)} backgroundColor='#d897fd' textColor='white' paddingVertical={10} style={{ borderWidth: 3, borderColor: 'white', width: '60%' }}>Add Goal</Button>
                ) : null}
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
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        paddingHorizontal: (Dimensions.get('window').height / 100) * 1.5,
    },
    content: {
        flex: 8
    },
    image: {
        height: (Dimensions.get('window').width / 100) * 80,
        flex: 6
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HomeTab