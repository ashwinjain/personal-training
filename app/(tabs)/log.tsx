import Exercise from "@/components/log/excercise";
import useExercise from "@/constants/hooks/useExercise";
import { ExerciseType, WorkoutType } from "@/constants/types/types";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { DatabaseAPI } from "../backend/database/api";
import styles from "../styles";

import Start from "../../components/start";

export default function Log() {
  // TODO: hardcoded, change this to current user
  const USERNAME = "ashwin";
  const [started, setStarted] = useState(false);
  const { exercises, addExercise, updateExercise } = useExercise();
  const [startTime, setStartTime] = useState(-1);
  const [endTime, setEndTIme] = useState(-1);
  const [workout, setWorkout] = useState<WorkoutType>({
    startTime: startTime,
    endTime: endTime,
    exercises: [],
  });

  useEffect(() => {
    const newWorkout = {
      startTime: startTime,
      endTime: endTime,
      exercises: exercises,
    };
    setWorkout(newWorkout);
  }, [startTime, endTime, exercises]); // dependencies control when the effect runs

  const onExerciseSubmit = () => {
    const db = new DatabaseAPI();
    // create a new object
    /*

    {
      exercises: Exercise[]
      starttime: datetime
      endtime: datetime
    }
    */

    db.uploadWorkout(USERNAME, workout);
    alert("updating gcp data");
  };

  function startWorkout() {
    const unixTimeSeconds = Math.floor(Date.now() / 1000);
    setStartTime(unixTimeSeconds);
    setStarted(true);
  }

  return (
    <>
      {started ? (
        <View style={styles.container}>
          <ScrollView>
            {workout.exercises.map((exercise: ExerciseType) => (
              <Exercise
                exercise={exercise}
                updateExercise={updateExercise}
                key={exercise.id}
              />
            ))}
          </ScrollView>
          <View style={styles.actionButtonContainer}>
            <Pressable style={styles.actionButton} onPress={addExercise}>
              <Text style={styles.buttonText}>Add Exercise</Text>
            </Pressable>
            <Pressable style={styles.actionButton} onPress={onExerciseSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <Start onPress={startWorkout} />
      )}
    </>
  );
}
