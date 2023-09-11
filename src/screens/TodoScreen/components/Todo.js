import { StyleSheet, Text, View } from "react-native";
import React from "react";

import todoStyles from "./Todo.style";
import ToDoButton from "../../../shared/components/ToDoButton";

import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "../../../store/todo/ToDoAction";

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  const onTodoComplete = (idx) => {
    dispatch(toggleComplete(idx));
  };
  const onTodoDelete = (idx) => {
    dispatch(deleteTodo(idx));
  };
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
          onPress={() => onTodoComplete(todo.id)}
          colorIcon={"green"}
        />
        <ToDoButton
          nameIcon={"close-circle-outline"}
          onPress={() => onTodoDelete(todo.id)}
          colorIcon={"red"}
        />
      </View>
    </View>
  );
}
