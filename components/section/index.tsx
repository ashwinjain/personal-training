import { View, Text, Button, Pressable } from "react-native";
import Dumbell from "@/assets/images/dumbell.jsx";
import styles from "./styles";
import { ReactElement } from "react";
import PreviousWorkout from "./previous-workout";
import Progress from "./progress";

type SectionProps = {
  title: string;
  icon?: ReactElement;
};

function isWorkout(title: string) {
  return title == "previous workout";
}
export default function Section({ title, icon }: SectionProps) {
  const isPreviousWorkout = title == "previous workout";
  return (
    <View
      style={[styles.container, { height: isPreviousWorkout ? "35%" : "55%" }]}
    >
      <View style={styles.sectionHeader}>
        {icon}
        <Text style={styles.title}>{title}</Text>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => alert("View More")}
        >
          <Text style={styles.buttonText}>View More</Text>
        </Pressable>
      </View>
      {isPreviousWorkout ? <PreviousWorkout /> : <Progress />}
    </View>
  );
}
