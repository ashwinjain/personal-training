import Exercise from "@/components/log/excercise";
import useExercise from "@/constants/hooks/useExercise";
import { ExerciseType, WorkoutType } from "@/constants/types/types";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import styles from "../styles";

export default function Log() {
  const [text, setText] = useState("");
  const { exercises, addExercise, updateExercise } = useExercise();
  const [workout, setWorkout] = useState<WorkoutType>({ exercises: [] });

  useEffect(() => {
    const newWorkout = { exercises: exercises };
    setWorkout(newWorkout);
  }, [exercises]); // dependencies control when the effect runs

  const handleChangeText = (input: string) => {
    setText(input);
  };

  const onExcerciseSubmit = () => {
    alert("updating gcp data");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {workout.exercises.map((exercise: ExerciseType) => {
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
          <Text style={styles.buttonText}>Add Exercise</Text>
        </Pressable>
        <Pressable style={styles.actionButton} onPress={onExcerciseSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}
