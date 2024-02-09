import { StyleSheet, Text } from "react-native"

const Title = ({children}) => {
    return <Text style={styles.title}>{children}</Text>

}
export default Title

const styles = StyleSheet.create({
    title: {
        color: '#ffffff',
        fontSize: 25,
        fontWeight: '800',
        textAlign: 'center',
        borderColor: '#ffffff',
        padding: 10,
        borderWidth: 1,
        backgroundColor: 'black',
        borderRadius: 10,
      }
})