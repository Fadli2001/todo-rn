import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SectionListExample from "./src/screens/SectionListExample";

//FlatList
// simple list 
// Perform more fast
//  [senin, selasa, rabu]
//Section 
// goruped/sectioned list
// more complex 

// data = [
    // {
    //   productName : 
    //   price : 
    //   category : 
    // }
// ]

// data = [
//   {
//     category : 'makanan',
//     data : [
//       {

//       }
//     ]
//   }
// ]

export default function App() {
  const days = ["Sunday", "Monday"];

  const listDays = days.map((day) => <Text>{day}</Text>);

  return (
    <View style={styles.container}>
      <SectionListExample/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
