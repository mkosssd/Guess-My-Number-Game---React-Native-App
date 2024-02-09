import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native'
import StartGameScreen from './screens/StartGameScreen'
import { useState } from 'react'
import GameScreen from './screens/GameScreen'
import GameOver from './screens/GameOver'
import Colors from './utils/colors'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

export default function App () {
  const [userNumber, setUserNumber] = useState()
  const [isGameOver, setGameOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)
  SplashScreen.preventAutoHideAsync()
    .then(result =>
      console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`)
    )
    .catch(console.warn)
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
  if (fontsLoaded) {
    setTimeout(async () => {
      SplashScreen.hideAsync()
    }, 2000)
  }
  const startGameHandler = pickedNumber => {
    setUserNumber(pickedNumber)
    setGameOver(false)
  }
  const onGameOver = (count) => {
    setGameOver(true)
    setGuessRounds(count)
  }
  const playAgainHandler = () => {
    setUserNumber()
    setGameOver(true)
    setGuessRounds(0)
  }
  let screen = <StartGameScreen startGameHandler={startGameHandler} />
  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={onGameOver}
      />
    )
  }

  if (isGameOver && userNumber) {
    screen = (
      <GameOver
        userNumber={userNumber}
        totalRounds={guessRounds}
        playAgain={playAgainHandler}
      />
    )
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
