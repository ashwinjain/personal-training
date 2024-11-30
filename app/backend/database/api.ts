import { doc, Firestore, getFirestore, setDoc } from "firebase/firestore";

import { WorkoutType } from "@/constants/types/types";
import { app } from "../firebase";

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
      const workoutId = data.startTime ?? "";
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
}
