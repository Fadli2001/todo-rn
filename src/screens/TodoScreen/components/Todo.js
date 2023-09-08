import { StyleSheet, Text, View } from "react-native";
import React from "react";

import todoStyles from "./Todo.style";
import ToDoButton from "../../../shared/components/ToDoButton";

export default function Todo({ todo, toggleComplete, deleteTodo }) {
  return (
    <View style={todoStyles.container}>
      <Text
        style={[
          todoStyles.text,
          todo.complete ? todoStyles.todoComplete : null,
        ]}
      >
        {todo.title}
      </Text>
      <View style={todoStyles.buttonWrapper}>
        <ToDoButton
          nameIcon={"checkmark-done-circle-outline"}
          onPress={() => toggleComplete(todo.id)}
          colorIcon={"green"}
        />
        <ToDoButton
          nameIcon={"close-circle-outline"}
          onPress={() => deleteTodo(todo.id)}
          colorIcon={"red"}
        />
      </View>
    </View>
  );
}
