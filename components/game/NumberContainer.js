import { StyleSheet, Text, View } from "react-native"
import Colors from "../../utils/colors"

const NumberContainer = ({children, style}) => {
    return (
        <View style={[styles.numberContainer,style]}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer

const styles = StyleSheet.create({
    numberContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.allOverPrimary,
        width: 250
        
    },
    numberText: {
        color: Colors.allOverSecondary,
        fontSize: 35,
        fontWeight: '900'
    }
})