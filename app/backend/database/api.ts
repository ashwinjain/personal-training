import {
  getFirestore,
  setDoc,
  doc,
  Firestore,
  collection,
  addDoc,
} from "firebase/firestore";

import { app } from "../firebase";
import { ExerciseType, WorkoutType } from "@/constants/types/types";
import { WorkoutDoc } from "./types";

export class DatabaseAPI {
  firestoreDB: Firestore;
  constructor() {
    this.firestoreDB = getFirestore(app);
  }

  public async uploadWorkout(
    username: string,
    data: WorkoutType
  ): Promise<void> {
    try {
      const workoutId = data.startTime;
      const today = new Date();
      const dateString = today.toISOString().split("T")[0]; // 'YYYY-MM-DD'
      const dailyDocRef = doc(
        this.firestoreDB,
        `users/${username}/${dateString}`,
        workoutId.toString()
      );

      await setDoc(dailyDocRef, data, { merge: true });
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
