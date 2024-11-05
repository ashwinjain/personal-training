import { useState } from "react";
import {
  defaultExercise,
  defaultSet,
  ExerciseType,
  SetType,
} from "../types/types";

export default function useSet() {
  const [sets, setSets] = useState<SetType[]>([defaultSet]);

  function addSet() {
    const newSet: SetType = {
      id: sets[sets.length - 1].id + 1,
      reps: 0,
      type: "normal",
      weight: 0,
    };
    setSets([...sets, newSet]);
  }

  function updateSet(set: SetType) {
    setSets(
      sets.map((current) => {
        if (current.id === set.id) {
          return {
            ...set,
          };
        }
        return current;
      })
    );
  }

  return { sets, addSet, updateSet };
}
