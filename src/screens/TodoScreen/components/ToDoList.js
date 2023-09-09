import { StyleSheet, FlatList, View } from "react-native";
import Todo from "./Todo";
import EmptyListView from "./EmptyListView";

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
    <View>
      <FlatList
        data={getVisisibleTodos()}
        renderItem={({ item }) => {
          return (
            <Todo
              todo={item}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => <EmptyListView todoType={type} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
