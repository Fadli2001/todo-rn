import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function TabBarItem(props) {
  const { title, setType, type } = props;
  return (
    <TouchableOpacity
      onPress={setType}
      style={[styles.container, styles.border, type === title ? styles.selected : null]}
    >
      <Text style={[styles.text, type === title ? styles.textActive : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {    
    flex: 1,    
    alignItems: "center",
    paddingVertical: 15,
  },
  text: {
    color: "#000",
    fontSize: 17,
  },
  textActive: {
    fontWeight: "900",
    color : 'black',
    fontSize : 17.5 
  },
});
