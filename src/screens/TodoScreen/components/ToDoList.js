import { StyleSheet, FlatList,Text } from "react-native";
import Todo from "./Todo";

export default function ToDoList(props) {
  const { todos, toggleComplete, deleteTodo, type } = props;

  const getVisisibleTodos = () => {
    switch (type) {
      case "All":
        return todos;
      case "Complete":
        return todos.filter((todo) => todo.complete);
      case "Active":
        return todos.filter((todo) => !todo.complete);
    }
  };

  return (
    <FlatList
      data={getVisisibleTodos()}
      renderItem={({ item }) => {
        console.log("Test Todos",item.title, item.complete);
        return (
          <Todo
            todo={item}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        )
      }}
      keyExtractor={(item) => item.id.toString()}
      ListEmptyComponent={() => <Text>Data Kosong</Text>}
    />
  );
}

const styles = StyleSheet.create({});
