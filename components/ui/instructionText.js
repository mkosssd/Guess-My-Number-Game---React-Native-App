import { StyleSheet, Text } from "react-native"
import Colors from "../../utils/colors"

const InstructionText = ({children}) => {
    return <Text style={styles.instructionText}>{children}</Text>
}

export default InstructionText

const styles = StyleSheet.create({
    instructionText: {
        marginTop: 10,
        color: Colors.allOverPrimary,
        fontWeight: '800',
        textAlign: 'center',
        fontSize: 20

    }
})