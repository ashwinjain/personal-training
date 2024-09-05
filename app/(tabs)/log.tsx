import Excercise from "@/components/log/excercise";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "../styles";
import {
  SetType,
  ExcerciseType,
  defaultSet,
  defaultExcercise,
} from "@/constants/types/types";
import useExcercise from "@/constants/hooks/useExcercise";

export default function Log() {
  const [text, setText] = useState("");
  const [excercises, setExcercises] = useState<ExcerciseType[]>([]);

  const handleChangeText = (input: string) => {
    setText(input);
  };

  const addExcercise = () => {
    const sets = useExcercise();
    setExcercises([
      ...excercises,
      {
        id: excercises.length + 1,
        sets: sets,
      },
    ]);
  };
  return (
    <View style={styles.container}>
      {excercises.map((excercise) => {
        return <Excercise key={excercise.id} data={excercise.sets} />;
      })}
      <View style={styles.actionButtons}>
        <Pressable style={styles.actionButton} onPress={addExcercise}>
          <Text style={styles.buttonText}>Add Excercise</Text>
        </Pressable>
        <Pressable style={styles.actionButton} onPress={addExcercise}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}
