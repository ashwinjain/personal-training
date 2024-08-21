import COLORS from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    display: "flex",
    marginTop: "6%",
    width: "90%",
    height: "45%",
    borderRadius: 18,
    backgroundColor: COLORS.section,
    shadowColor: "grey",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  title: {
    fontSize: 14,
    fontWeight: "200",
    textTransform: "uppercase",
    fontFamily: "Commissioner",
  },
  sectionHeader: {
    padding: "4%",
    gap: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: COLORS.button,
    position: "absolute",
    right: 15,
    paddingHorizontal: 6,
    paddingVertical: 3,

    borderRadius: 10,
    fontSize: 7,
  },
  buttonText: {
    fontSize: 10,
    fontWeight: "300",
    fontFamily: "Commissioner",
  },
});

export default styles;
