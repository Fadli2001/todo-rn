import { StyleSheet, Text, View, StatusBar } from "react-native";
import {Provider} from "react-redux";
import AppNavigation from "./src/navigation/RootNavigator";
import configureStore from "./src/store/store";


const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigation />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
