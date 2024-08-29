import COLORS from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    // alignItems: "center",
  },
  addExcerciseButton: {
    display: "flex",
    width: "95%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 100,
    shadowColor: "grey",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    position: "absolute",
    bottom: 0,
  },
  addExcerciseText: {
    color: COLORS.primary,
  },
});

export default styles;
