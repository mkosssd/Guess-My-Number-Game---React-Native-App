import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native'
import PrimaryButton from '../components/ui/primaryButton'
import { useState } from 'react'
import Colors from '../utils/colors'
import Title from '../components/ui/title'
import Card from '../components/ui/card'

const StartGameScreen = props => {
  const [enteredNumber, setEnteredNumber] = useState('')

  const numberInputHandler = userInput => {
    setEnteredNumber(userInput)
  }
  const resetInputHandler = () => {
    setEnteredNumber('')
  }
  const { width, height } = useWindowDimensions()
  const marginTopVal = height < 380 ? 30 : 50
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number', 'Enter a number only between 0 to 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler }
      ])
      return
    }
    props.startGameHandler(chosenNumber)
  }

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.container, { marginTop: marginTopVal }]}>
          <Title>Enter A Number</Title>
          <Card
            style={{
              borderWidth: 3,
              borderColor: Colors.allOverSecondary,
              borderRadius: 5
            }}
          >
            <TextInput
              style={styles.numberInput}
              value={enteredNumber}
              onChangeText={numberInputHandler}
              maxLength={2}
              cursorColor={Colors.allOverSecondary}
              keyboardType={'number-pad'}
              caretHidden={false}
            />
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}
export default StartGameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  numberInput: {
    height: 50,
    width: 70,
    textAlign: 'center',
    fontSize: 25,
    paddingHorizontal: 10,
    backgroundColor: '#444',
    fontWeight: '900',
    // borderWidth: Platform.OS==='android'? 3 : 0, //Will show border only on Android
    borderWidth: Platform.select({ios:0, android: 3}),
    borderRadius: 10,
    marginVertical: 10,
    borderColor: Colors.allOverSecondary,
    color: Colors.allOverSecondary,
    alignSelf: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  container: {
    padding: 15,
    // marginHorizontal: 15,
    alignItems: 'center'
  }
})
