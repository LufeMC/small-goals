import { TouchableOpacity, StyleSheet } from "react-native"
import TextEl from "./TextEl"

const Button = ({ children, backgroundColor = 'white', textColor = 'black', action, style = {}, paddingVertical = 20 }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor, paddingVertical }, style]}
            onPress={action}>
            <TextEl size={15} fontWeight='bold' color={textColor}>{children}</TextEl>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 0,
        borderRadius: 10,
        alignItems: 'center',
    }
});

export default Button