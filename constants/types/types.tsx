export interface SetType {
  id: number;
  type: "normal" | "drop" | "super";
  reps: number;
  weight: number;
}
export interface ExerciseType {
  id: number;
  sets: SetType[];
}

export const defaultSet: SetType = {
  id: 1,
  type: "normal",
  reps: 0,
  weight: 0,
};
export const defaultExercise: ExerciseType = {
  id: 1,
  sets: [defaultSet],
};
