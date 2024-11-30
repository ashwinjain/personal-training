import Exercise from "@/components/log/excercise";
import useExercise from "@/constants/hooks/useExercise";
import { defaultExercise, ExerciseType } from "@/constants/types/types";
import { Pressable, ScrollView, Text, View } from "react-native";
import styles from "../styles";

import useWorkout from "@/constants/hooks/useWorkout";
import { useEffect } from "react";
import Start from "../../components/start";

export default function Log() {
  // state variables
  const { workout, startWorkout, finishWorkout, updateWorkout } = useWorkout();
  const { exercises, setExercises, addExercise, updateExercise } =
    useExercise();

  useEffect(() => {
    updateWorkout(exercises);
  }, [exercises]);

  useEffect(() => {
    if (workout.endTime == null) {
      setExercises([defaultExercise]);
    }
  }, [workout.endTime]);

  return (
    <>
      {workout.startTime != null ? (
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
            <Pressable
              style={styles.actionButton}
              onPress={() => updateWorkout(exercises)}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
            <Pressable style={styles.actionButton} onPress={finishWorkout}>
              <Text style={styles.buttonText}>Finish Workout</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View>
          <Start onPress={() => startWorkout("ashwin")} name={"Ashwin"} />
          <Start onPress={() => startWorkout("anshu")} name={"Anshu"} />
          <Start onPress={() => startWorkout("sudhit")} name={"Sudhit"} />
        </View>
      )}
    </>
  );
}
