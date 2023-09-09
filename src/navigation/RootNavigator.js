import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../screens/SpalshScreen/SplashScreen";
import { View } from "react-native";

import PATH from "./NavigationPath";
import ToDoScreen from "../screens/TodoScreen/ToDoScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import PopupMenu from "../screens/TodoScreen/components/PopupMenu";

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
          name={PATH.LOGIN}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Group
          screenOptions={({ navigation }) => {
            return {
              headerStyle: {
                backgroundColor: "#233D90",
              },
              headerTitleStyle: {
                fontWeight: "bold",
                color: "white",
                fontSize: 30,
              },
              headerShadowVisible: false,
              headerRight: () => <PopupMenu navigation={navigation} />,
              headerLeft: () => <View />              
            };
          }}
        >
          <Stack.Screen
            name={PATH.TODO_LIST}
            component={ToDoScreen}
            options={{ title: "Todos" }}            
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
