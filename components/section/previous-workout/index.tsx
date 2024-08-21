import { View, Text } from "react-native";
import styles from "./styles";

type StatProps = {
  value: number;
  type: string;
};
function Stat({ value, type }: StatProps) {
  return (
    <View style={styles.statContainer}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statType}>{type}</Text>
    </View>
  );
}
function PreviousWorkout() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.date}>Monday, August 18th</Text>
        <Text style={styles.duration}>01:04:34</Text>
      </View>
      <View style={styles.bottom}>
        <Stat value={23} type={"Sets"} />
        <Stat value={215} type={"Reps"} />
      </View>
    </View>
  );
}
export default PreviousWorkout;
