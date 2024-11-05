import COLORS from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    margin: 10,
    borderRadius: 15,
    padding: 20,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // marginHorizontal: 20,
    marginTop: 15,
  },
  header: {
    fontFamily: "Commissioner",
    fontSize: 16,
  },
  textInput: {
    fontSize: 20,
  },
  addExerciseText: {
    color: COLORS.primary,
  },
  button: {
    width: "auto",
    marginRight: "auto",
    marginTop: 10,
  },
});

export default styles;
