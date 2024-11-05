import Set from "@/components/log/set";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import styles from "./styles";

import useSet from "@/constants/hooks/useSet";
import React, { useEffect } from "react";

import { ExerciseType } from "@/constants/types/types";

type ExerciseProps = {
  exercise: ExerciseType;
  updateExercise: (exercise: ExerciseType) => void;
};
export default function Exercise({ exercise, updateExercise }: ExerciseProps) {
  const [text, setText] = useState("");
  const handleChangeText = (input: string) => {
    setText(input);
  };

  const { sets, addSet, updateSet } = useSet();

  useEffect(() => {
    const newExercise = { id: exercise.id, sets: sets };
    updateExercise(newExercise);
  }, [sets]); // dependencies control when the effect runs

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter excercise name"
        value={text}
        onChangeText={handleChangeText}
        style={styles.textInput}
        onSubmitEditing={() => alert("hello")}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Set</Text>
        <Text style={styles.header}>Weight</Text>
        <Text style={styles.header}>Reps</Text>
      </View>
      {sets.map((set) => {
        return <Set data={set} updateSet={updateSet} key={set.id} />;
      })}
      <Pressable onPress={addSet} style={styles.button}>
        <Text style={styles.addExerciseText}>Add Set</Text>
      </Pressable>
    </View>
  );
}
