import { StyleSheet, Text, View, StatusBar } from 'react-native';
import ToDoScreen from './src/screens/TodoScreen/ToDoScreen';
import SplashScreen from './src/screens/SpalshScreen/SplashScreen';
import AppNavigation from './src/navigation/RootNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ToDoScreen/> */}
      {/* <SplashScreen/> */}
      <AppNavigation/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
