import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Greetings from './src/screens/Greetings';
import Card from './src/components/Card';
import FlashSale from './src/screens/FlashSale';
import Counter from './src/screens/Counter';

export default function App() {
  return (
    <View style={styles.container}>      
      {/* <Greetings /> */}
      {/* <Card/> */}
      {/* <FlashSale/> */}
      <Counter/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
