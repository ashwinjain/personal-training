import { ExerciseType } from "@/constants/types/types";

export interface WorkoutDoc {
  exercises: ExerciseType[];
  starttime: string;
  endtime: string;
}
