import Set from "@/components/log/set";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import styles from "./styles";

import { ExerciseType, SetType, defaultSet } from "@/constants/types/types";
import useSet from "@/constants/hooks/useSet";

export default function Excercise({ data }: { data: ExerciseType }) {
  const [text, setText] = useState("");
  const handleChangeText = (input: string) => {
    setText(input);
  };

  const { sets, addSet, updateSet } = useSet();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Exercise"
        value={text}
        onChangeText={handleChangeText}
      />
      {sets.map((set) => {
        return <Set data={set} key={set.id} />;
      })}
      <Pressable onPress={addSet}>
        <Text style={styles.addExerciseText}>Add Set</Text>
      </Pressable>
    </View>
  );
}
