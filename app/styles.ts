import COLORS from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    // alignItems: "center",
  },

  actionButtons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    width: "100%",
    left: 50,
    transform: "translateX(-50px)",
    shadowColor: "grey",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    gap: 10,
  },
  actionButton: {
    backgroundColor: "white",
    display: "flex",
    width: "95%",
    alignItems: "center",
    borderRadius: 100,
  },
  buttonText: {
    color: COLORS.primary,
  },
});

export default styles;
