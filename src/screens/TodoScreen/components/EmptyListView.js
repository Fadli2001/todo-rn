import { View, Image,Text } from "react-native";
import React from "react";

export default function EmptyListView({todoType}) {
  return (
    <View
      style={{                
        alignItems: "center"        
      }}
    >
      <Image
        style={{
          width: "80%",
          height: 200,
        }}
        source={require("../../../shared/assets/empty_undraw.png")}
      />
      <Text style={{
        fontSize : 20,
        fontWeight : 200
      }}>{todoType} Todo is Empty</Text>
    </View>
  );
}
