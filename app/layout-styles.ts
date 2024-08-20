import COLORS from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "95%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    paddingTop: "20%",
    paddingBottom: "5%",
    paddingLeft: "5%",
    color: COLORS.primary,
    fontSize: 28,
    fontWeight: "bold",
  },
});

export default styles;
