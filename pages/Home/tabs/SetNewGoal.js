import { useState } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity } from "react-native";
import { Modal } from "react-native";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import TextEl from "../../../components/TextEl";

const SetNewGoal = ({ action, modalVisible, changeModalVisibility }) => {
    const [goal, setGoal] = useState('')
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <TouchableOpacity onPressOut = {() => changeModalVisibility(false)} style={styles.centeredView}>
                <TouchableOpacity style={styles.modalView}>
                    <TextEl color='#d897fd' size={15} fontWeight='bold'>Add Goal</TextEl>
                    <Input placeholder='Goal' type='default' value={goal} onChange={setGoal} inputStyle = {{borderWidth: 3, borderColor: '#d897fd'}} style={{ width: '100%', marginVertical: 10 }} />
                    <Button action={() => {
                        action(goal)
                        changeModalVisibility(false)
                    }} backgroundColor='#d897fd' textColor='white' paddingVertical={10} style={{ width: '100%' }}>Add Goal</Button>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        width: '90%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
})

export default SetNewGoal