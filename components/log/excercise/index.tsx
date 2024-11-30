import Set from "@/components/log/set";
import useSet from "@/constants/hooks/useSet";
import { ExerciseType } from "@/constants/types/types";
import React, { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import styles from "./styles";

type ExerciseProps = {
  exercise: ExerciseType;
  updateExercise: (exercise: ExerciseType) => void;
};

export default function Exercise({ exercise, updateExercise }: ExerciseProps) {
  const [exerciseName, setExerciseName] = useState("");
  const { sets, addSet, updateSet } = useSet();

  // Update the exercise when sets or exerciseName changes
  useEffect(() => {
    updateExercise({ id: exercise.id, name: exerciseName, sets });
  }, [sets, exerciseName]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter exercise name"
        value={exerciseName}
        onChangeText={setExerciseName}
        style={styles.textInput}
      />

      <View style={styles.headerContainer}>
        {["Set", "Weight", "Reps"].map((header) => (
          <Text style={styles.header} key={header}>
            {header}
          </Text>
        ))}
      </View>

      {sets.map((set) => (
        <Set data={set} updateSet={updateSet} key={set.id} />
      ))}

      <Pressable onPress={addSet} style={styles.button}>
        <Text style={styles.addExerciseText}>Add Set</Text>
      </Pressable>
    </View>
  );
}
