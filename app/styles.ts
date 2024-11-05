import COLORS from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  actionButtonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 10,
    gap: 10,
  },
  actionButton: {
    backgroundColor: "white",
    display: "flex",
    width: "95%",
    alignItems: "center",
    borderRadius: 100,
    height: 40,
    justifyContent: "center",
  },
  buttonText: {
    color: COLORS.primary,
  },
});

export default styles;
