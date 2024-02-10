import { Feather, FontAwesome6 } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions
} from 'react-native'
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

  const { width } = useWindowDimensions()
  let content = (
    <>
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
		<InstructionText style={{ marginBottom: 10 }}>
        GUESSED LOGS
      </InstructionText>
        {/* + - */}
      </View>
    </>
  )
  if (width > 500) {
    content = (
      <>
        <View style={styles.numberCardContainer}>
          <Card
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 25
            }}
          >
            <PrimaryButton
              style={{ width: '25%' }}
              onPress={nextGuessHandler.bind(this, 'higher')}
            >
              <Feather name='plus' size={24} color='black' />
            </PrimaryButton>
            <NumberContainer style={{ width: '25%' }}>{currentGuess}</NumberContainer>
            <PrimaryButton
              style={{ width: '25%' }}
              onPress={nextGuessHandler.bind(this, 'lower')}
            >
              <FontAwesome6 name='minus' size={24} color='black' />
            </PrimaryButton>
          </Card>
        </View>
		<View style={styles.listContainer}>
        <FlatList
          contentContainerStyle={[{ alignItems: 'center', flexDirection:'row' }]}
          data={guessedNumLogs}
          renderItem={itemData => (
            <Text style={[styles.guessLogText,{marginHorizontal: 3}]}>{itemData.item}</Text>
          )}
          keyExtractor={(item,index) => index}
        />
      </View>
      </>
    )
  }
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>

      {content}
      
      
    </View>
  )
}
export default GameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 25,
	alignItems:'center'
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
	width:35,
	height:35,
    textAlign: 'center',
	verticalAlign:'middle',
    marginVertical: 2,
    borderRadius: 20
  },
  listContainer: {
    flex: 1,
    padding: 20
  }
})
