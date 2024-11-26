import COLORS from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  actionButtonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 10,
    gap: 10,
  },
  actionButton: {
    backgroundColor: COLORS.button,
    display: "flex",
    width: "95%",
    alignItems: "center",
    borderRadius: 100,
    height: 40,
    justifyContent: "center",
  },
});

export default styles;
