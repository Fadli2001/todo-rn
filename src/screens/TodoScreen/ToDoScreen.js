import { Text, View, TextInput, Button, Alert } from "react-native";
import { useState } from "react";
import React from "react";

import styles from "./ToDoScreen.style";
import TabBar from "./components/TabBar";
import ToDoList from "./components/ToDoList";
import Input from "../../shared/components/Input";
import SubmitButton from "../../shared/components/SubmitButton";

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
    const trimInput = appState.inputValue.trim();
    if (trimInput === "" || trimInput.length < 4) {
      Alert.alert("Invalid Input", "Please Correct input");
    } else {
      const payload = {
        title: appState.inputValue,
        complete: false,
        id: appState.todos.length + 1,
      };
      const todos = [...appState.todos, payload];
      setAppState({ ...appState, todos, inputValue: "" });
    }
  };

  const onChangeValue = (val) => {
    setAppState({ ...appState, inputValue: val });
  };

  return (
    <View style={styles.container}>
      {/* heading  */}
      {/* <View style={styles.headerSection}>
        <Heading />
      </View> */}
      {/* form add list  */}
      <View style={styles.formSection}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View
            style={{
              flex: 3,
              paddingHorizontal: 5,
            }}
          >
            <Input value={appState.inputValue} onChangeValue={onChangeValue} />
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
