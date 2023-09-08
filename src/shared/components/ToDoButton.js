import { TouchableHighlight } from "react-native";
import React from "react";

import Icon from "@expo/vector-icons/Ionicons";

export default function ToDoButton({ onPress, nameIcon, colorIcon }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <Icon name={nameIcon} color={colorIcon} size={26} />
    </TouchableHighlight>
  );
}
