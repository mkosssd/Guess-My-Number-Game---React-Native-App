import { StyleSheet, Text } from "react-native"

const Title = ({children,style}) => {
    return <Text style={[styles.title,style]}>{children}</Text>

}
export default Title

const styles = StyleSheet.create({
    title: {
        color: '#ffffff',
        fontFamily:'open-sans-bold',
        fontSize: 25,
        // fontWeight: '800',
        textAlign: 'center',
        borderColor: '#ffffff',
        padding: 10,
        borderWidth: 1,
        backgroundColor: 'black',
        borderRadius: 10,
      }
})