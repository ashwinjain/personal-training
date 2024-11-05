import COLORS from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    fontFamily: "Commissioner",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    padding: 5,
    width: 40,
    height: 25,
  },
});

export default styles;
