
import { View, Text, StyleSheet } from "react-native";


export default function CardTop() {
  return (
    <View>
      <View style={styles.top}>
        <Text style={styles.text}>Noto.io</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    padding: 10,
  },
  text: {
    color: "black",
    fontSize: 40,
    marginHorizontal: 20,
    fontWeight: 900,
  },
});
