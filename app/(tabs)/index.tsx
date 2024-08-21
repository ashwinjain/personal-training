import Dumbell from "@/assets/images/dumbell";
import Chart from "@/assets/images/chart";
import Section from "@/components/section";
import { StyleSheet, View } from "react-native";

export default function TabOneScreen() {
  return (
    <View>
      <Section title="previous workout" icon={<Dumbell />} />
      <Section title="progress" icon={<Chart />} />
    </View>
  );
}
