import { View, Text, Button, Pressable } from "react-native";
import Dumbell from "@/assets/images/dumbell.jsx";
import styles from "./styles";
import { ReactElement } from "react";

type SectionProps = {
  title: string;
  icon?: ReactElement;
};

function calculateHeight(title: string) {
  return title == "previous workout" ? "30%" : "60%";
}
export default function Section({ title, icon }: SectionProps) {
  return (
    <View style={[styles.container, { height: calculateHeight(title) }]}>
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
    </View>
  );
}
