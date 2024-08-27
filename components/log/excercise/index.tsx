import Dumbell from "@/assets/images/dumbell";
import Chart from "@/assets/images/chart";
import Section from "@/components/section";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import styles from "./styles";
import { useState } from "react";
import Set from "@/components/log/set";

export interface SetType {
  order: number;
  type: "normal" | "drop" | "super";
  reps: number;
  weight: number;
}

const defaultSet: SetType = {
  order: 1,
  type: "normal",
  reps: 0,
  weight: 0,
};

function addExcercise() {
  alert("add excercise pressed");
}

export default function Log() {
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
        return <Set data={set} />;
      })}
    </View>
  );
}
