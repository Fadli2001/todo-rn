import { StyleSheet, Text, View, StatusBar } from 'react-native';
import ToDoScreen from './src/screens/TodoScreen/ToDoScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ToDoScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
