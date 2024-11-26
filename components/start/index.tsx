import { Button, Touchable, TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

export default function Start() {
  return (
    <View>
      <TouchableOpacity style={styles.actionButtonContainer}>
        <View style={styles.actionButton}>
          <Text>Start Workout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
