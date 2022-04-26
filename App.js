import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';

export default function App() {
  const[lang, Setlang]= useState('')
  const[submitted, setSubmitted] = useState(false)
  const onClickHandler=()=>{
    if(lang.length > 3){
      setSubmitted(!submitted)
    }else if(lang.length == 2){
      Alert.alert('Warning', 'You entered an invalid Languange', [
        {
          text: 'Ok', onPress:()=> console.warn('Okay Pressed')
        },
      {
        text: 'Continue', onPress:()=> console.warn('Continue Pressed')
      },
      {
        text: 'Cancel', onPress:()=> console.warn('cancel was Pressed')
      }
    ],{
      cancelable: true, onDismiss:()=>console.warn('Alert dismssed')}
      )
    }else{
      // ToastAndroid.show('Invalid', ToastAndroid.LONG)
      // ToastAndroid.showWithGravity('Invalid Lang', ToastAndroid.SHORT, ToastAndroid.TOP)
      ToastAndroid.showWithGravityAndOffset('error message',ToastAndroid.LONG, ToastAndroid.BOTTOM, 600,0)
    }
      
  }
  return (

    <View style={styles.container}>

      <Text style={styles.text}>Which language are you comfortable with?</Text>
      <TextInput
      style={styles.textInput}
      onChangeText={(value)=>Setlang(value)}
      placeholder='e.g Kotlin, JavaScript'
      />
      <Text>Your preferred language is: {lang}</Text>
      <TouchableOpacity
      style={styles.touchableButtton}
      onPress={onClickHandler}
      >
        <Text>{submitted ? 'submit' : 'clear'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    width: 200,
    borderWidth:1,
    textAlign: 'center', 
    marginBottom: 10
  },
  text:{
    margin:20,
  },
  touchableButtton:{
    backgroundColor:'#08F',
    borderRadius: 5,
    margin: 20,
    width: 50,
    alignItems:'center',
  }
});
