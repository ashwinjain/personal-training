import { useState } from "react";
import { defaultExercise, ExerciseType, SetType } from "../types/types";

export default function useExercise() {
  const [exercises, setExercises] = useState<ExerciseType[]>([defaultExercise]);

  function addExercise() {
    const newExercise: ExerciseType = {
      id: exercises[exercises.length - 1].id + 1,
      sets: [],
    };
    setExercises([...exercises, newExercise]);
  }

  function updateExercise(exercise: ExerciseType) {
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
