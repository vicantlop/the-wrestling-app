import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./components/Login"
import Feed from "./components/Feed"
import Profile from "./components/Profile"
import Camera from "./components/Camera"
import AppNavigator from './components/AppNavigator';

export default function App() {
  return (
    <AppNavigator></AppNavigator>
    // <View style={styles.container}>
      
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
