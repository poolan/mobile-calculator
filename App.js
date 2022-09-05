import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  
  const [number1, setNumber1] = React.useState('');
  const [number2, setNumber2] = React.useState('');
  const [result, setResult] = React.useState(0);

  const plusButton = () => { 
    setResult(parseFloat(number1) + parseFloat(number2)); 
  };
  const minusButton = () => { 
    setResult(parseFloat(number1) - parseFloat(number2));
  };

  return (
    <View style = {styles.container}>
      <View style = {styles.container}>
      <Text style = {styles.alertText}>Result = {result}</Text>
        <TextInput 
          keyboardType = 'numeric'
          value = {number1}
          onChangeText = {txt => setNumber1(txt)}
          style={styles.input}
        />
        <TextInput 
          keyboardType = 'numeric'
          value = {number2}
          onChangeText = {txt => setNumber2(txt)}
          style={styles.input}
        />
      </View>
      <View style = {styles.buttonContainer}>
        <Button title = '+' onPress={plusButton}/>
        <Button title = '-' onPress={minusButton}/>
      </View>
      <View style = {styles.buttonContainertwo}>

      </View>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 16,
    marginVertical: 8,
  },

  buttonContainer: {
      marginBottom: 450,
      width: 60,
      backgroundColor: 'blue',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    
  input: {
    width:200, 
    borderColor:'gray', 
    borderWidth:1
  }
});
