import { Image, StyleSheet, Text, View } from 'react-native'
import Title from '../components/ui/title'
import Colors from '../utils/colors'
import PrimaryButton from '../components/ui/primaryButton'

const GameOver = ({playAgain, userNumber, totalRounds}) => {
  return (
    <View style={styles.gameOverContainer}>
      <Title style={{ marginTop: 15 , width: '100%'}}>GAME OVER!</Title>
      <View style={styles.imageStyles}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>Your phone took <Text style={styles.highlight}>{totalRounds}</Text> chances to guess the number <Text  style={styles.highlight}>{userNumber}</Text></Text>
      <PrimaryButton onPress={playAgain} style={{borderColor: Colors.allOverPrimary, borderWidth: 2,}}>Play Again</PrimaryButton>
    </View>
  )
}
export default GameOver

const styles = StyleSheet.create({
  gameOverContainer: {
    flex: 1,
    padding: 25,
    alignItems:'center',
  },
  imageStyles: {
    width: 300,
    marginTop:15,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.allOverPrimary,
    overflow: 'hidden',
    margin:'auto'
  
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    marginVertical: 55,
    fontFamily: 'open-sans-bold',
    fontSize: 17,
  },
  highlight: {
    fontSize: 20,
    fontWeight: '900'
  }
})
