import { Text, View, TextInput, Button, Alert } from "react-native";
import { useState } from "react";
import React from "react";

import styles from "./ToDoScreen.style";
import TabBar from "./components/TabBar";
import ToDoList from "./components/ToDoList";
import Input from "../../shared/components/Input";
import SubmitButton from "../../shared/components/SubmitButton";
import { useDispatch, useSelector } from "react-redux";

import { addTodo, setTodoName, showLoading } from "../../store/todo/ToDoAction";

const todoDummy = [
  { id: 1, title: "Olahraga", complete: true },
  { id: 2, title: "Ngoding", complete: false },
  { id: 3, title: "Ngopskuy", complete: true },
];

export default function ToDoScreen() {
  const dispatch = useDispatch();
  const currId = useSelector((state) => {
    let maxId = 0;
    state.ToDoReducer.todos.forEach((todo) => {
      if (todo.id > maxId) {
        maxId = todo.id;
      }
    });
    return maxId;
  });
  const todoName = useSelector((state) => state.ToDoReducer.newTodoName);
  //   setAppState({ ...appState, type });
  // };

  // const toggleComplete = (todoIndex) => {
  //   const { todos } = appState;
  //   todos.forEach((todo) => {
  //     if (todo.id === todoIndex) {
  //       todo.complete = !todo.complete;
  //     }
  //   });

  //   setAppState({ ...appState, todos });
  // };

  // const deleteTodo = (todoIndex) => {
  //   const { todos: currentTodos } = appState;
  //   const newTodos = currentTodos.filter((todo) => todo.id !== todoIndex);
  //   setAppState({ ...appState, todos: newTodos });
  // };

  const submitTodo = () => {
    const trimInput = todoName;
    if (trimInput === "" || trimInput.length < 4) {
      Alert.alert("Invalid Input", "Please Correct input");
    } else {
      const payload = {
        title: todoName,
        complete: false,
        id: currId + 1,
      };

      setTimeout(() => {
        dispatch(addTodo(payload));
        dispatch(showLoading(false));
      }, 500);
    }
  };

  const onSetTodoName = (text) => {
    dispatch(setTodoName(text));
  };

  return (
    <View style={styles.container}>
      <View style={styles.formSection}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View
            style={{
              flex: 3,
              paddingHorizontal: 5,
            }}
          >
            <Input value={todoName} onChangeValue={onSetTodoName} />
          </View>
          <View
            style={{
              flex: 2,
            }}
          >
            <SubmitButton title={"Tambah"} onSubmit={submitTodo} />
          </View>
        </View>
        <Text
          style={{
            fontWeight: 200,
            marginLeft: 10,
            marginTop: 5,
          }}
        >
          Input minimal 4 karakter ya
        </Text>
      </View>

      {/* list  */}
      <View style={styles.listSection}>
        <ToDoList />
      </View>

      {/* tabBar */}
      <View style={styles.tabBarSection}>
        <TabBar />
      </View>
    </View>
  );
}
