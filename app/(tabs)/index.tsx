
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';


import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Text>This is react-native using expo.</Text>
      <StatusBar style='auto' />
    </View>
  );
}
 const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'

  }
 })