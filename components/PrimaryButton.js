import { Pressable, StyleSheet, Text, View } from 'react-native'

const PrimaryButton = ({ children }) => {
    const pressHandler = () => {
        console.log('Pressed!');
    }
  return (
      <View style={styles.ButtonOuterContainer}>
          <Pressable style={({pressed})=>pressed ? [styles.ButtonInnerContainer, styles.pressed]:styles.ButtonInnerContainer} onPress={pressHandler} android_ripple={{color:'#cccccc'}}>
        <Text style={styles.ButtonText}>{children}</Text>
    </Pressable>
      </View>
  )
}
export default PrimaryButton

const styles = StyleSheet.create({
    ButtonOuterContainer:{
        backgroundColor: '#ffffff',
        borderRadius: 25,
        elevation: 2,
        overflow: 'hidden',
        margin: 5,
        width: '45%',
        alignSelf:'center'
    },
    ButtonText : {
        fontWeight: '800',
        textAlign: 'center',
        padding: 8,
    },
    ButtonInnerContainer :{ 

    },
    pressed: {
        opacity: 0.75
    }

})