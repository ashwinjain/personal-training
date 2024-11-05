import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { SetType } from "@/constants/types/types";

export default function Set({ data }: { data: SetType }) {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");

  function handleWeightChange(weight: string) {
    setWeight(weight);
  }
  function handleRepsChange(reps: string) {
    setReps(reps);
  }

  return (
    <View style={styles.container} id={`${data.id}`}>
      <Text>{data.id}</Text>
      <TextInput
        style={styles.textInput}
        value={weight}
        onChangeText={handleWeightChange}
        keyboardType="numeric"
        returnKeyType="done"
      />
      <TextInput
        style={styles.textInput}
        value={reps}
        onChangeText={handleRepsChange}
      />
    </View>
  );
}
