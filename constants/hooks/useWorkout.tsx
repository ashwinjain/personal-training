import { db } from "@/app/backend/database";
import { useEffect, useState } from "react";
import { ExerciseType, WorkoutType } from "../types/types";
export default function useWorkout() {
  const [workout, setWorkout] = useState<WorkoutType>({
    startTime: null,
    endTime: null,
    exercises: [],
  });

  const getUnixTime = () => Math.floor(Date.now() / 1000);

  useEffect(() => {
    if (workout.endTime != null) {
      db.uploadWorkout("ashwin", workout);
      setWorkout({ startTime: null, endTime: null, exercises: [] });
    }
  }, [workout.endTime]);
  // Start the workout
  const startWorkout = () => {
    setWorkout((prev) => ({
      ...prev,
      startTime: getUnixTime(),
    }));
  };

  // End the workout
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
