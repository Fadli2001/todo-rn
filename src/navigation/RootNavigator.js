import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../screens/SpalshScreen/SplashScreen";
import ToDoList from "../screens/TodoScreen/components/ToDoList";

import PATH from "./NavigationPath";
import ToDoScreen from "../screens/TodoScreen/ToDoScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={PATH.SPLASH}>
        <Stack.Screen
          name={PATH.SPLASH}
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={PATH.TODO_LIST}
          component={ToDoScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
