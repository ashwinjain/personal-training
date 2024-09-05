import Set from "@/components/log/set";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import styles from "./styles";

import {
  SetType,
  ExcerciseType,
  defaultSet,
  defaultExcercise,
} from "@/constants/types/types";

export default function Excercise({ data }: { data: SetType[] }) {
  const [text, setText] = useState("");
  const handleChangeText = (input: string) => {
    setText(input);
  };

  const [sets, setSets] = useState<SetType[]>([]);
  function addSet() {
    setSets((prev) => [...prev, defaultSet]);
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Excercise"
        value={text}
        onChangeText={handleChangeText}
      />
      {sets.map((set) => {
        return <Set data={set} key={set.id} />;
      })}
      <Pressable onPress={addSet}>
        <Text style={styles.addExcerciseText}>Add Set</Text>
      </Pressable>
    </View>
  );
}
