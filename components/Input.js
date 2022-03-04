import { StyleSheet, TextInput, Dimensions, View } from "react-native";
import {
    Montserrat_400Regular,
    useFonts
} from '@expo-google-fonts/montserrat'
import TextEl from "./TextEl";

const Input = ({ placeholder, value, onChange, type, flex = 1, style = {}, inputStyle = {} }) => {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular
    });

    return (
        <View style = {[{width: '100%', flex}, style]}>
            <TextInput
                style={[styles.input, inputStyle]}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                keyboardType={type}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical: (17 / 375) * Dimensions.get('window').width,
        fontSize: (15 / 375) * Dimensions.get('window').width,
        fontFamily: 'Montserrat_400Regular',
        marginTop: 10,
        backgroundColor: 'white',
        width: '100%'
    }
});

export default Input