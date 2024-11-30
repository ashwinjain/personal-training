import { useState } from "react";
import { defaultExercise, ExerciseType } from "../types/types";

export default function useExercise() {
  const [exercises, setExercises] = useState<ExerciseType[]>([defaultExercise]);

  function addExercise() {
    const newExercise: ExerciseType = {
      name: "",
      id: exercises[exercises.length - 1]?.id + 1 || 1, // Safe handling if no exercises exist
      sets: [],
    };
    setExercises((prevExercises) => [...prevExercises, newExercise]);
  }

  function updateExercise(updatedExercise: ExerciseType) {
    setExercises((prevExercises) =>
      prevExercises.map((current) =>
        current.id === updatedExercise.id
          ? {
              ...current,
              name: updatedExercise.name,
              sets: updatedExercise.sets,
            }
          : current
      )
    );
  }

  return { exercises, setExercises, addExercise, updateExercise };
}
