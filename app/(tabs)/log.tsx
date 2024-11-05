import Exercise from "@/components/log/excercise";
import useExercise from "@/constants/hooks/useExercise";
import { ExerciseType } from "@/constants/types/types";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import styles from "../styles";

export default function Log() {
  const [text, setText] = useState("");
  const { exercises, addExercise, updateExercise } = useExercise();

  console.log(exercises);
  const handleChangeText = (input: string) => {
    setText(input);
  };

  const onExcerciseSubmit = () => {
    console.log(exercises);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {exercises.map((exercise: ExerciseType) => {
          return (
            <Exercise
              exercise={exercise}
              updateExercise={updateExercise}
              key={exercise.id}
            />
          );
        })}
      </ScrollView>
      <View style={styles.actionButtonContainer}>
        <Pressable style={styles.actionButton} onPress={addExercise}>
          <Text style={styles.buttonText}>Add Excercise</Text>
        </Pressable>
        <Pressable style={styles.actionButton} onPress={onExcerciseSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}
