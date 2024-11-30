import { StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    margin: 10,
    borderRadius: 15,
    padding: 20,
    width: "90%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  header: {
    fontFamily: "Commissioner",
    fontSize: 16,
  },
  textInput: {
    fontSize: 20,
    color: "black",
  },
  addExerciseText: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
  button: {
    alignSelf: "flex-start",
    marginTop: 10,
  },
});

export default styles;
