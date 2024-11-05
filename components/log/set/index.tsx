import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { ExerciseType, SetType } from "@/constants/types/types";

type SetT = {
  data: SetType;
  updateSet: (set: SetType) => void;
};

export default function Set({ data, updateSet }: SetT) {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");

  function updateSetLocal() {
    const newSet: SetType = {
      id: data.id,
      type: data.type,
      reps: Number(reps),
      weight: Number(weight),
    };
    updateSet(newSet);
  }

  return (
    <View style={styles.container} id={`${data.id}`}>
      <Text>{data.id}</Text>
      <TextInput
        style={styles.textInput}
        value={weight}
        onChangeText={(text) => {
          setWeight(text);
        }}
        keyboardType="numeric"
        returnKeyType="done"
        onSubmitEditing={updateSetLocal}
      />
      <TextInput
        style={styles.textInput}
        value={reps}
        onChangeText={(text) => setReps(text)}
        keyboardType="numeric"
        returnKeyType="done"
        onSubmitEditing={updateSetLocal}
      />
    </View>
  );
}
