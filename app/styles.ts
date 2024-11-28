import COLORS from "@/constants/Colors";
import { StyleSheet } from "react-native";
import { FlipInEasyX } from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  scrollContainer: {
    display: "flex",
    alignItems: "center",
  },
  actionButtonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 10,
    gap: 10,
  },
  addButton: {
    backgroundColor: COLORS.progress,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: "100%",
  },
  actionButton: {
    backgroundColor: "white",
    display: "flex",
    width: "95%",
    alignItems: "center",
    borderRadius: 100,
    height: 40,
    // marginTop: 20,
    justifyContent: "center",
  },
  buttonText: {
    color: COLORS.primary,
    fontSize: 15,
  },
});

export default styles;
