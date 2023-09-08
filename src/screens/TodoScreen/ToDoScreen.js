import { Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import React from "react";

import styles from "./ToDoScreen.style";
import TabBar from "./components/TabBar";
import ToDoList from "./components/ToDoList";

const todoDummy = [
  { id: 1, title: "Olahraga", complete: true },
  { id: 2, title: "Ngoding", complete: false },
  { id: 3, title: "Ngopskuy", complete: true },
];

export default function ToDoScreen() {
  const [appState, setAppState] = useState({
    type: "All",
    todos: [...todoDummy],
    inputValue: "",
  });

  const setType = (type) => {
    setAppState({ ...appState, type });
  };

  const toggleComplete = (todoIndex) => {
    console.log("Test Index", todoIndex);
    const { todos } = appState;
    todos.forEach((todo) => {
      if (todo.id === todoIndex) {
        todo.complete = !todo.complete;
      }
    });

    setAppState({ ...appState, todos });
  };

  const deleteTodo = (todoIndex) => {
    const { todos: currentTodos } = appState;
    const newTodos = currentTodos.filter((todo) => todo.id !== todoIndex);
    setAppState({ ...appState, todos: newTodos });
  };

  const submitTodo = () => {    
    const payload = {
      title: appState.inputValue,
      complete: false,
      id: appState.todos.length + 1,
    };    
    const todos = [...appState.todos, payload];
    setAppState({ ...appState, todos, inputValue: "" });
  };

  const onChangeValue = (val) => {
    setAppState({ ...appState, inputValue : val });
  };

  return (
    <View style={styles.container}>
      {/* heading  */}
      <View style={styles.headerSection}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 52,
          }}
        >
          Todos
        </Text>
      </View>          
      {/* form add list  */}
      <View style={styles.formSection}>
        <TextInput
          placeholder="New Todo"
          value={appState.inputValue}
          onChangeText={onChangeValue}
          style={{
            padding: 10,
            borderWidth: 1,
            borderColor: "black",
            marginBottom: 5,
          }}
        />
        <Button title="Submit" onPress={submitTodo} />
      </View>

      {/* list  */}
      <View style={styles.listSection}>
        <ToDoList
          todos={appState.todos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          type={appState.type}
        />
      </View>

      {/* tabBar */}
      <View style={styles.tabBarSection}>
        <TabBar type={appState.type} setType={setType} />
      </View>
    </View>
  );
}
