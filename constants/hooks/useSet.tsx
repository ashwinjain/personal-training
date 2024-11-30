import { useState } from "react";
import { defaultSet, SetType } from "../types/types";

export default function useSet() {
  const [sets, setSets] = useState<SetType[]>([defaultSet]);

  function addSet() {
    const newSet: SetType = {
      id: sets[sets.length - 1]?.id + 1 || 1, // Safe handling if no sets exist
      reps: 0,
      type: "normal",
      weight: 0,
    };
    setSets((prevSets) => [...prevSets, newSet]);
  }

  function updateSet(updatedSet: SetType) {
    setSets((prevSets) =>
      prevSets.map((current) =>
        current.id === updatedSet.id ? { ...updatedSet } : current
      )
    );
  }

  return { sets, addSet, updateSet };
}
