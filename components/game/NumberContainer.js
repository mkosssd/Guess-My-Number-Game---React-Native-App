import { StyleSheet, Text, View } from "react-native"
import Colors from "../../utils/colors"

const NumberContainer = ({children}) => {
    return (
        <View style={styles.numberContainer}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer

const styles = StyleSheet.create({
    numberContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.allOverPrimary
        
    },
    numberText: {
        color: Colors.allOverSecondary,
        fontSize: 35,
        fontWeight: '900'
    }
})