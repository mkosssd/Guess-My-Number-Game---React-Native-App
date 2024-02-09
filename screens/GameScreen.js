import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import Title from '../components/ui/title'
import { useState, useEffect } from 'react'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/primaryButton'
import Card from '../components/ui/card'
import Colors from '../utils/colors'
import InstructionText from '../components/ui/instructionText'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome6 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return rndNum
  }
}

let minBoundary = 1
let maxBoundary = 100

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  useEffect(() => {
    if (userNumber === currentGuess) {
      onGameOver()
    }
  }, [currentGuess, userNumber, onGameOver])

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' }
      ])
      return
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess
    } else if (direction === 'higher') {
      minBoundary = currentGuess + 1
    }

    const rndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    )
    setCurrentGuess(rndNumber)
  }

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <View style={styles.numberCardContainer}>
        <Card>
          <NumberContainer>{currentGuess}</NumberContainer>
        </Card>
      </View>
      <View>
        <InstructionText>Higher or Lower?</InstructionText>
        <Card>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
              <Feather name="plus" size={24} color="black" />
            </PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <FontAwesome6 name="minus" size={24} color="black" />
            </PrimaryButton>
          </View>
        </Card>
        {/* + - */}
      </View>
      <InstructionText>LOG ROUND</InstructionText>
    </View>
  )
}
export default GameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 25
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  numberCardContainer: {
    marginVertical: 15
  }
})
