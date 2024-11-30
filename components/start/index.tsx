import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

export default function Start({
  onPress,
  name,
}: {
  onPress: () => void;
  name: String;
}) {
  return (
    <View>
      <TouchableOpacity style={styles.actionButtonContainer} onPress={onPress}>
        <View style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Start Workout - {name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
