import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

export default function Start({ onPress }: { onPress: () => void }) {
  return (
    <View>
      <TouchableOpacity style={styles.actionButtonContainer} onPress={onPress}>
        <View style={styles.actionButton}>
          <Text>Start Workout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
