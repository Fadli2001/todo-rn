import {
  FlatListComponent,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Hello = (props) => {
  const fullName = props.fullName !== undefined ? props.fullName : "Agus";
  const company = props.company !== undefined ? props.company : "PT Hunian";
  console.log(props.isFilled)
  return (
    <View style={[styles.backgroundSection,{margin : 7,padding : 4}]}>
      <Text>
        Hello i'm {fullName} as a React Developer from {company} and my age {props.age}
        {props.isFilled}
         {/* {props.isFilled} undefined karena tidak dikirimkan oleh parentnya */}
      </Text>
      {props.children}
    </View>
  );
};

export default function Greetings() {
  const dataProfile = {
    fullName: "Raisa",
    company: "Enigmacamp",
    age : 20
  };
  return (
    <View>
      <Hello 
      fullName={'Doni'}
      company={'Enigma'}
    //   {...dataProfile}
     // pemanggilan component single tag, (tanpa mengirimkan porps children)
      />

      <Hello {...dataProfile}>
        <Text // text component ini sebagai props children
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Hello i'm children props
        </Text>
      </Hello>
    </View>
  );
}

const styles = StyleSheet.create({
    backgroundSection : {
        borderWidth : 0.5,
        borderColor : "red"
    }
});
