import { StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";

const styles = StyleSheet.create({
  actionButtonContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 10,
    gap: 10,
  },
  actionButton: {
    backgroundColor: COLORS.button,
    width: "95%",
    alignItems: "center",
    borderRadius: 100,
    height: 40,
    justifyContent: "center",
  },
  actionButtonText: {
    fontSize: 14,
    fontFamily: "Commissioner",
    fontWeight: "500",
    textAlign: "center",
    color: "black",
  },
});

export default styles;
