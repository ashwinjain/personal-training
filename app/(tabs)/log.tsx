import Excercise from "@/components/log/excercise";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "../styles";
import {
  SetType,
  ExerciseType,
  defaultSet,
  defaultExercise,
} from "@/constants/types/types";
import useExercise from "@/constants/hooks/useExercise";

export default function Log() {
  const [text, setText] = useState("");
  const { exercises, addExercise, updateExercise } = useExercise();
  const sets = useExercise();

  const handleChangeText = (input: string) => {
    setText(input);
  };
  return (
    <View style={styles.container}>
      {exercises.map((exercise: ExerciseType) => {
        return <Excercise key={exercise.id} data={exercise} />;
      })}
      <View style={styles.actionButtons}>
        <Pressable style={styles.actionButton} onPress={addExercise}>
          <Text style={styles.buttonText}>Add Excercise</Text>
        </Pressable>
        <Pressable style={styles.actionButton} onPress={addExercise}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}
