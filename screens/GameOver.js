import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions
} from 'react-native'
import Title from '../components/ui/title'
import Colors from '../utils/colors'
import PrimaryButton from '../components/ui/primaryButton'

const GameOver = ({ playAgain, userNumber, totalRounds }) => {
  const { width, height } = useWindowDimensions()
  let imageSize = 300
  if (width < 380) {
    imageSize = 150
  }
  if (height < 400) {
    imageSize = 100
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  }
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.gameOverContainer}>
        <Title style={{ marginTop: 15, width: '100%' }}>GAME OVER!</Title>
        <View style={[styles.imageStyles, imageStyle]}>
          <Image
            style={styles.image}
            source={require('../assets/images/success.png')}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone took <Text style={styles.highlight}>{totalRounds}</Text>{' '}
          chances to guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton
          onPress={playAgain}
          style={{ borderColor: Colors.allOverPrimary, borderWidth: 2 }}
        >
          Play Again
        </PrimaryButton>
      </View>
    </ScrollView>
  )
}
export default GameOver

const styles = StyleSheet.create({
  screen :{
    flex: 1
  },
  gameOverContainer: {
    flex: 1,
    padding: 25,
    alignItems: 'center'
  },
  imageStyles: {
    marginTop: 15,
    // width: 300,
    // height: 300,
    // borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.allOverPrimary,
    overflow: 'hidden',
    margin: 'auto'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    marginVertical: 30,
    fontFamily: 'open-sans-bold',
    fontSize: 17
  },
  highlight: {
    fontSize: 20,
    fontWeight: '900'
  }
})
