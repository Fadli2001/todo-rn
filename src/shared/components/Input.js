import React from "react";
import {TextInput, StyleSheet} from "react-native";

const Input = ({value, onChangeValue, placeholder, isSecureText, additionalSytle}) => {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeValue}
            placeholder={placeholder || "What needs to be done?"}
            style={[styles.input,additionalSytle]}
            placeholderTextColor={"#CACACA"}
            selectionColor={"#666666"}
            secureTextEntry={isSecureText}
        />
    )
}

export default Input;

const styles = StyleSheet.create({
    input: {
        padding: 7,
        borderWidth: 0.5,
        borderColor: "black",  
        borderRadius : 10      
    }
})
