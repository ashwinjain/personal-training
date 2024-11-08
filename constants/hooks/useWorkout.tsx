import { useState } from "react";
import {
  defaultExercise,
  ExerciseType,
  SetType,
  WorkoutType,
} from "../types/types";

export default function useWorkout() {
  const [workout, setWorkout] = useState<WorkoutType>();

  function updateWorkout(exercise: ExerciseType) {
    setExercises(
      exercises.map((current) => {
        if (current.id === exercise.id) {
          return {
            ...current,
            sets: exercise.sets,
          };
        }
        return current;
      })
    );
  }

  return { exercises, addExercise, updateExercise };
}
