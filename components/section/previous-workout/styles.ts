import COLORS from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "4%",
    // backgroundColor: "lightblue",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "6%",
    justifyContent: "space-around",
  },
  date: {
    fontSize: 18,
    fontFamily: "Commissioner",
  },
  duration: {
    fontSize: 14,
    fontFamily: "Commissioner",
  },
  statContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    borderWidth: 1,
    borderColor: COLORS.button,
    borderRadius: 40,
    height: 80,
    width: 80,
  },
  statValue: {
    fontSize: 18,
    fontFamily: "Commissioner",
  },
  statType: {
    fontSize: 10,
    fontFamily: "Commissioner",
  },
});

export default styles;
