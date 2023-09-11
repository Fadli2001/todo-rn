import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState,useEffect } from "react";
import loginStyles from "./LoginScreen.style";
import SubmitButton from "../../shared/components/SubmitButton";
import {showLoading} from "../../store/todo/ToDoAction"
import {login} from "../../store/login/LoginAction";
import { useDispatch, useSelector } from "react-redux";

import PATH from "../../navigation/NavigationPath";

export default function ProductForm({ navigation }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = useSelector((state) => state.LoginReducer.isLoggedIn);

  const [inputErrors, setInputErrors] = useState({
    isValidUsername: "",
    isValidPassword: "",
  });

  const validateInputs = () => {
    const errors = {};
    if (username.trim() === "") {
      errors.isValidUsername = "Username or email is required";
    }
    if (password.trim() === "") {
      errors.isValidPassword = "Password is required";
    }
    return errors;
  };

  useEffect(() => {
    if (isLoggedIn) {
        dispatch(showLoading(false));
        navigation.replace(PATH.TODO_LIST);
    } else {
        dispatch(showLoading(false));
    }
})

  const submitLogin = () => {
    dispatch(showLoading(true));
    const errors = validateInputs();
    if (Object.keys(errors).length > 0) {
      setInputErrors(errors);
    } else if (username === "enigma" && password === "123") {
      setTimeout(() => {
        dispatch(login(true))
      }, 1000);
    } else {
      Alert.alert("Incorrect", "Invalid Username or Password");      
    }   
  };

  const isErrorView = (errorValidation) => {
    if (errorValidation) {
      return (
        <Text style={{ color: "red", marginBottom: 7 }}>{errorValidation}</Text>
      );
    }
  };

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.logoSection}>
        <Image
          style={{
            width: "80%",
            height: 150,
          }}
          source={require("../../shared/assets/login_undraw.png")}
        />
      </View>
      <View style={{ flex: 2, paddingHorizontal: 15 }}>
        <View style={loginStyles.form}>
          <View style={loginStyles.headerForm}>
            <Text style={loginStyles.title}>Hello!,</Text>
            <Text style={loginStyles.title}>Well Come Back Enigmanians</Text>
          </View>
          <Text style={loginStyles.label}>Email</Text>
          <TextInput
            onChangeText={(val) => {
              setUsername(val);
              setInputErrors({
                ...inputErrors,
                isValidUsername: "",
              });
            }}
            placeholder="Username or Email"
            style={loginStyles.input}
          />
          {isErrorView(inputErrors.isValidUsername)}
          <Text style={loginStyles.label}>Password</Text>
          <TextInput
            onChangeText={(val) => {
              setPassword(val);
              setInputErrors({
                ...inputErrors,
                isValidPassword: "",
              });
            }}
            style={loginStyles.input}
            secureTextEntry={true}
            placeholder="password"
          />
          {isErrorView(inputErrors.isValidPassword)}
          <View
            style={{
              marginVertical: 6,
            }}
          >
            <SubmitButton
              title={"Login"}
              additionalSyle={{ backgroundColor: "#233d90" }}
              colorText={{ color: "white" }}
              onSubmit={submitLogin}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
