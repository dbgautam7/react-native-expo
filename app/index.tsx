import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>This is  react-native using expo.</Text>
      <StatusBar style='auto' />
    </View>
  )
}

export default App

const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff',
      justifyContent:'center',
      alignItems:'center'
  
    }
   })