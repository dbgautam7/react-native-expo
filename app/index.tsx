import {  Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'


const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text >This is  react-native using expo. Got it sure.</Text>
      <StatusBar style='auto' />
      <Link href='/profile'>Go to Profile</Link>
    </View>
  )
}

export default App
