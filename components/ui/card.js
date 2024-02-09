import { StyleSheet, View } from "react-native"
import Colors from "../../utils/colors"

const Card = ({children,style}) => {
    return (
        <View style={[styles.inputContainer,style]}>{children}</View>
    )
}
export default Card

const styles = StyleSheet.create({
    inputContainer: {
        padding: 15,
        // marginHorizontal: 15,
        backgroundColor: Colors.allOverPrimary,
        borderRadius: 10,
        elevation: 5,
        marginVertical: 10,
        borderWidth: 1
      },
})