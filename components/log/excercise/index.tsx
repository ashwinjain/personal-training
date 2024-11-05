import Set from "@/components/log/set";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import styles from "./styles";

import { ExerciseType, SetType, defaultSet } from "@/constants/types/types";
import useSet from "@/constants/hooks/useSet";

export default function Excercise() {
  const [text, setText] = useState("");
  const handleChangeText = (input: string) => {
    setText(input);
  };

  const { sets, addSet, updateSet } = useSet();

  const onExcerciseSubmit = () => {};

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter excercise name"
        value={text}
        onChangeText={handleChangeText}
        style={styles.textInput}
        onSubmitEditing={() => alert("hello")}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Set</Text>
        <Text style={styles.header}>Weight</Text>
        <Text style={styles.header}>Reps</Text>
      </View>
      {sets.map((set) => {
        return <Set data={set} key={set.id} />;
      })}
      <Pressable onPress={addSet} style={styles.button}>
        <Text style={styles.addExerciseText}>Add Set</Text>
      </Pressable>
    </View>
  );
}
