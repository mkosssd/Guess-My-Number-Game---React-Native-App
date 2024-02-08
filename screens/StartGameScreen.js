import { StyleSheet, TextInput, View } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

const StartGameScreen = () => {
    return (
    
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} cursorColor={'white'} keyboardType={'number-pad'} autoFocus={true} caretHidden={false}/>
            <View style={styles.buttonContainer}>
                <PrimaryButton>Reset</PrimaryButton>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>

    )
}
export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        padding: 15,
        backgroundColor: '#000',
        marginHorizontal: 15,
        borderRadius: 10,
        elevation: 5,
        marginTop:100,
        borderWidth: 1
    },
    numberInput: {
        height: 50,
        width: 70,
        textAlign: 'center',
        fontSize: 25,
        paddingHorizontal: 10,
        backgroundColor:'#444',
        fontWeight: '900',
        borderBottomWidth: 3,
        borderRadius:10,
        marginVertical: 10,
        borderColor: 'white',
        color: 'white',
        alignSelf: 'center',
    },
    buttonContainer : {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    }

})