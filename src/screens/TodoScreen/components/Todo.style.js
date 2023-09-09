import { StyleSheet } from "react-native";

export default todoStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginBottom : 6,
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: "white",

    // shadow
    shadowOffset: {
      width: 0,
      height: 0.7,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
  todoComplete: {
    textDecorationLine: "line-through",
  },
});
