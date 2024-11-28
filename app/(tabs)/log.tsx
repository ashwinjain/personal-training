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
  const [endTime, setEndTime] = useState(-1);
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
  }, [startTime, exercises]); // dependencies control when the effect runs

  useEffect(() => {
    const newWorkout = {
      startTime: startTime,
      endTime: endTime,
      exercises: exercises,
    };
    setWorkout(newWorkout);
    updateWorkout();
  }, [endTime]);

  function updateWorkout() {
    const db = new DatabaseAPI();
    db.uploadWorkout(USERNAME, workout);
  }
  const onExerciseSubmit = () => {
    updateWorkout();
  };

  function startWorkout() {
    const unixTimeSeconds = Math.floor(Date.now() / 1000);
    setStartTime(unixTimeSeconds);
    setStarted(true);
    updateWorkout();
  }
  function finishWorkout() {
    const unixTimeSeconds = Math.floor(Date.now() / 1000);
    setEndTime(unixTimeSeconds);
    setStarted(false);
  }

  return (
    <>
      {started ? (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {workout.exercises.map((exercise: ExerciseType) => (
              <Exercise
                exercise={exercise}
                updateExercise={updateExercise}
                key={exercise.id}
              />
            ))}
            <Pressable style={styles.addButton} onPress={addExercise}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </ScrollView>
          <View style={styles.actionButtonContainer}>
            <Pressable style={styles.actionButton} onPress={onExerciseSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
            <Pressable style={styles.actionButton} onPress={finishWorkout}>
              <Text style={styles.buttonText}>Finish Workout</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <Start onPress={startWorkout} />
      )}
    </>
  );
}
