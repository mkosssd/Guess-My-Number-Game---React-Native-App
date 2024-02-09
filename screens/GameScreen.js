import { Feather, FontAwesome6 } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import NumberContainer from '../components/game/NumberContainer'
import Card from '../components/ui/card'
import InstructionText from '../components/ui/instructionText'
import PrimaryButton from '../components/ui/primaryButton'
import Title from '../components/ui/title'
import Colors from '../utils/colors'
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
  const [guessedNumLogs, setGuessedNumLogs] = useState([initialGuess])

  useEffect(() => {
    if (userNumber === currentGuess) {
      onGameOver(guessedNumLogs.length)
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])

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
    setGuessedNumLogs(guessLog => [rndNumber, ...guessedNumLogs])
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
              <Feather name='plus' size={24} color='black' />
            </PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <FontAwesome6 name='minus' size={24} color='black' />
            </PrimaryButton>
          </View>
        </Card>
        {/* + - */}
      </View>
      <InstructionText style={{ marginBottom: 10 }}>
        GUESSED LOGS
      </InstructionText>
      <View style={styles.listContainer}>
        <FlatList
          contentContainerStyle={{ alignItems: 'center' }}
          data={guessedNumLogs}
          renderItem={itemData => (
            <Text style={styles.guessLogText}>{itemData.item}</Text>
          )}
          keyExtractor={item => item}
        />
      </View>
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
  },
  guessLogText: {
    color: Colors.allOverSecondary,
    fontFamily: 'open-sans-bold',
    fontSize: 17,
    backgroundColor: Colors.allOverPrimary,
    padding: 8,
    textAlign: 'center',
    marginVertical: 2,
    borderRadius: 20
  },
  listContainer: {
    flex: 1,
    padding: 20
  }
})
