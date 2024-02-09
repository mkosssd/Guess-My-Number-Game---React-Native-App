import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native'
import StartGameScreen from './screens/StartGameScreen'
import { useState } from 'react'
import GameScreen from './screens/GameScreen'
import GameOver from './screens/GameOver'
import Colors from './utils/colors'

export default function App () {
  const [userNumber, setUserNumber] = useState()
  const [isGameOver, setGameOver] = useState(false)

  const startGameHandler = pickedNumber => {
    setUserNumber(pickedNumber)
    setGameOver(false)
  }
  const onGameOver = () => {
    setGameOver(true)
  }
  let screen = <StartGameScreen startGameHandler={startGameHandler} />
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={onGameOver} />
  }
  if (isGameOver && userNumber) {
    screen = <GameOver></GameOver>
  }
  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.allOverSecondary]}
      style={styles.container}
    >
      <ImageBackground
        imageStyle={styles.imageBackground}
        style={styles.container}
        resizeMode='cover'
        source={require('./assets/images/background.png')}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    opacity: 0.15
  }
})
