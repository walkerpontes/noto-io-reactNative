import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Task from "../app/task";
import Note from "../app/note";

export default function CardBottom() {
  const [element, setElement] = useState("");

  function mostrar() {
    switch (element) {
      case "todo":
        return <Task />;
      case "note":
        return <Note />;
      default:
        return <Task />;
    }
  }
  return (
    <View style={{ flex: 1 }}>
      {mostrar()}
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => setElement("todo")}
          activeOpacity={0.9}>
          <Icon name="list" size={30} color={"#fff"}></Icon>
          <Text style={styles.text}>To do List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => setElement("note")}
          activeOpacity={0.9}>
          <Icon name="file" size={30} color={"#ffffff"}></Icon>
          <Text style={styles.text}>Notas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    height: 80,
    width: "70%",
    alignSelf: "center",
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#000000",
    justifyContent: "space-around",
    bottom: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },

  card: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    marginHorizontal: 20,
  },
});
