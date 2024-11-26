import Exercise from "@/components/log/excercise";
import useExercise from "@/constants/hooks/useExercise";
import { ExerciseType, WorkoutType } from "@/constants/types/types";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import styles from "../styles";
import { DatabaseAPI } from "../backend/database/api";
import { WorkoutDoc } from "../backend/database/types";

import Start from "../../components/start";

export default function Log() {
  // TODO: hardcoded, change this to current user
  const USERNAME = "ashwin";
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
    const db = new DatabaseAPI();
    // create a new object
    /*

    {
      exercises: Exercise[]
      starttime: datetime
      endtime: datetime
    }
    */

    const workoutData: WorkoutDoc = {
      exercises: exercises,
      starttime: "9",
      endtime: "10",
    };
    db.uploadWorkout(USERNAME, workoutData);
    alert("updating gcp data");
  };

  return <Start></Start>;
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
