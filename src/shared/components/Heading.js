import { StyleSheet, Text, View } from "react-native";

const Heading = () => (
  <View
    style={{
      alignItems: "center",
    }}
  >
    <Text style={styles.text}>Todos</Text>
  </View>
);

export default Heading;

const styles = StyleSheet.create({
  text: {
    fontSize: 52,
    fontWeight: "bold",
    color : 'black'
  },
});
