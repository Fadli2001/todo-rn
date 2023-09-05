import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => setCount((prevCount) => prevCount + 1);
  const decrease = () => {
    if (count > 0) setCount((prevCount) => prevCount - 1); // best way
    // setCount(count + 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter with state </Text>
      <Button
        title={"Increase"}
        onPress={increase}
        btnStyle={[styles.button, { backgroundColor: "green" }]}
      />
      <View
        style={{
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text>Count : {count} </Text>
      </View>
      <Button
        title={"Decrease"}
        onPress={decrease}
        btnStyle={[styles.button, { backgroundColor: "yellow" }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  button: {
    alignItems: "center",
    padding: 10,
    width: 100,
    borderRadius: 10,
  },
});
