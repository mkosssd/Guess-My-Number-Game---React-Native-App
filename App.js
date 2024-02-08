import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient'
export default function App() {
  return (
    <LinearGradient colors={['#edd111','#ffffff']} style={styles.container} >
      <ImageBackground imageStyle={styles.imageBackground} style={styles.container} resizeMode='cover' source={require('./assets/images/background.png')}>

      <StartGameScreen/>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground:{
    opacity: 0.15
  }
});
