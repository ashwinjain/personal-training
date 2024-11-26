import { getFirestore, setDoc, doc, Firestore } from "firebase/firestore";

import { app } from "../firebase";
import { ExerciseType } from "@/constants/types/types";
import { WorkoutDoc } from "./types";

export class DatabaseAPI {
  firestoreDB: Firestore;
  constructor() {
    this.firestoreDB = getFirestore(app);
  }

  public async uploadWorkout(
    username: string,
    data: WorkoutDoc
  ): Promise<void> {
    try {
      // Reference to the workout document in Firestore
      const workoutRef = doc(this.firestoreDB, "users", username);

      // Upload (set) the workout data
      await setDoc(workoutRef, data);

      console.log("Workout uploaded successfully!");
    } catch (error) {
      console.error("Error uploading workout:", error);
      throw error; // Re-throw error for the caller to handle
    }
  }

  private getDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(currentDate.getDate()).padStart(2, "0");

    return `${year}${month}${day}`; // Example: 2024-11-21
  }
}
