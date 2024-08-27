import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";
import { SetType } from "@/app/(tabs)/log";
import { useState } from "react";

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
    <View style={styles.container} id={`${data.order}`}>
      <Text>{data.order}</Text>
      <TextInput
        placeholder="Weight"
        value={weight}
        onChangeText={handleWeightChange}
      />
      <TextInput
        placeholder="Reps"
        value={reps}
        onChangeText={handleRepsChange}
      />
    </View>
  );
}
