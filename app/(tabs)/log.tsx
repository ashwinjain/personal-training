import Excercise from "@/components/log/excercise";
import useExercise from "@/constants/hooks/useExercise";
import { ExerciseType } from "@/constants/types/types";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import styles from "../styles";
import { BlurView } from "expo-blur";

export default function Log() {
  const [text, setText] = useState("");
  const { exercises, addExercise, updateExercise } = useExercise();
  const sets = useExercise();

  const handleChangeText = (input: string) => {
    setText(input);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {exercises.map((exercise: ExerciseType) => {
          return <Excercise key={exercise.id} />;
        })}
      </ScrollView>
      <View style={styles.actionButtonContainer}>
        <Pressable style={styles.actionButton} onPress={addExercise}>
          <Text style={styles.buttonText}>Add Excercise</Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}
