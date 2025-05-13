import { router, useNavigation, useRouter } from "expo-router";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import {Feather} from "@expo/vector-icons";
import CheckBox from "expo-checkbox";

export default function ViewTask({ tasks, isCompleted, deletar}) {
  function detalis(title,description){
    router.push(`/detalisTask?title=${title}&description=${description}`)
  }
  return (
    <View style={styles.body}>
      {tasks?.map((task) => (
        <TouchableOpacity
          key={task.id}
          style={styles.lista}
          activeOpacity={1}
          onPress={() => detalis(task.title,task.description)}>
          <CheckBox
            style={styles.switch}
            value={task.isCompleted}
            onValueChange={() => isCompleted(task.id)}
            color={task.isCompleted && "#6eb2ff"}
            />
          <Text style={[styles.texto, {textDecorationLine: !task.isCompleted || "line-through", color:!task.isCompleted || "#6eb2ff" }]}>{task.title}</Text>
          <Feather
            name="trash-2"
            size={30}
            style={styles.icon}
            onPress={() => deletar(task.id)}></Feather>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: "90%",
    height: "auto",
    alignSelf: "center",
    gap: 20,
    paddingBottom: 130,
  },
  lista: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    gap: 20,
    padding: 20,
  },
  switch: {
    width: 25,
    height:25,
    borderRadius: 5,
    borderColor: "#0000001c",
  },
  texto: {
    fontSize: 20,
    width: 250,
    lineHeight: 30,

  },
  icon: {
    position: "absolute",
    right: 20,
  },
});
