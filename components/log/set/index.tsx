import { View, Text, TextInput } from "react-native";
import { useEffect, useState } from "react";
import styles from "./styles";
import { ExerciseType, SetType } from "@/constants/types/types";

type SetProps = {
  data: SetType;
  updateSet: (set: SetType) => void;
};

export default function Set({ data, updateSet }: SetProps) {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");

  useEffect(() => {
    const updatedSet: SetType = {
      ...data,
      weight: Number(weight) || 0,
      reps: Number(reps) || 0,
    };
    updateSet(updatedSet);
  }, [weight, reps]);

  return (
    <View style={styles.container}>
      <Text>{data.id}</Text>
      <TextInput
        style={styles.textInput}
        value={weight}
        onChangeText={setWeight} // Directly pass state updater
        keyboardType="numeric"
        returnKeyType="done"
        placeholder="Weight"
      />
      <TextInput
        style={styles.textInput}
        value={reps}
        onChangeText={setReps} // Directly pass state updater
        keyboardType="numeric"
        returnKeyType="done"
        placeholder="Reps"
      />
    </View>
  );
}
