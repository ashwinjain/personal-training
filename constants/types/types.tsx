export interface SetType {
  id: number;
  type: "normal" | "drop" | "super";
  reps: number;
  weight: number;
}
export interface ExerciseType {
  id: number;
  name: string;
  sets: SetType[];
}

export interface WorkoutType {
  startTime: number | null;
  endTime: number | null;
  exercises: ExerciseType[];
}

export const defaultSet: SetType = {
  id: 1,
  type: "normal",
  reps: 0,
  weight: 0,
};
export const defaultExercise: ExerciseType = {
  id: 1,
  name: "",
  sets: [defaultSet],
};
