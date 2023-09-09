import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  shadow: {
    // iOS
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    // Android
    elevation: 5,
  },
  logoutIcon: {
    paddingLeft: 20,
    paddingVertical: 20,
  },
  btn: {
    borderWidth: 1,
    borderColor: "#233D90",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 13,
    padding: 13,
  },
  btnText: {
    fontWeight: "bold",
  },
  cardModal: {
    backgroundColor: "#efefef",
    width: "75%",
    height: "35%",
    borderRadius: 15,
    padding: 10,
    display: "flex",
  }
});
