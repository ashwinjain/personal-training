import { db } from "@/app/backend/database";
import { useEffect, useState } from "react";
import { defaultWorkout, ExerciseType, WorkoutType } from "../types/types";

export default function useWorkout() {
  const [workout, setWorkout] = useState<WorkoutType>({
    startTime: null,
    endTime: null,
    exercises: [],
  });

  const getUnixTime = () => Math.floor(Date.now() / 1000);

  useEffect(() => {
    if (workout.endTime) {
      db.uploadWorkout("ashwin", workout);
      setWorkout(defaultWorkout);
    }
  }, [workout.endTime]);

  const startWorkout = () => {
    setWorkout((prev) => ({
      ...prev,
      startTime: getUnixTime(),
    }));
  };

  const finishWorkout = () => {
    setWorkout((prev) => ({
      ...prev,
      endTime: getUnixTime(),
    }));
  };

  const updateWorkout = (exercises: ExerciseType[]) => {
    setWorkout((prev) => ({
      ...prev,
      exercises,
    }));
  };

  return { workout, startWorkout, finishWorkout, updateWorkout };
}
