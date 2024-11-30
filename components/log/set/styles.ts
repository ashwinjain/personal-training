import { StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";

const styles = StyleSheet.create({
  container: {
    fontFamily: "Commissioner",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 50,
    height: 35,
    textAlign: "center",
    fontSize: 14,
  },
});

export default styles;
