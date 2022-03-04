import { StyleSheet } from "react-native"
import { View } from "react-native"
import TextEl from "./TextEl"

const PastGoal = ({item}) => {
    return (
        <View style = {styles.container}>
            <View  style = {styles.date}>
                <TextEl color = '#d897fd' size = {17} fontWeight = 'bold'>{item.date}</TextEl>
            </View>
            <View  style = {styles.content}>
                <TextEl color = '#d897fd' size = {15}>{item.name}</TextEl>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 15,
        paddingHorizontal: 10,
        marginVertical: 2
    },
    date: {
        paddingVertical:10,
    },
    content: {
        paddingBottom:10,
    },
})

export default PastGoal