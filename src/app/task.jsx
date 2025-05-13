import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import AddTask from "../components/addTask";
import ViewTask from "./viewTask";
import { useEffect, useState } from "react";
import  { armazenar, getDados } from "../localStorage/storage"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const randomNumericId = (length = 6) =>
    Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");

export default function Task() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const carregarDados = async () => {
      const data = await getDados('tasks');
      setTasks(data || []);
    };

    carregarDados();
  }, []);

  function isCompleted(id) {
    const newTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTask);
  }

  function deletar(id) {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
  }

  function Adicionar(title, description) {
    const newTask = {
      id: randomNumericId(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([newTask, ...tasks]);
  }

  useEffect(()=>{
    async function fecth() {
    await armazenar("tasks",tasks)
    }
    return fecth
  },[tasks])

  return (
    <View style={styles.body}>
      <ScrollView>
        <AddTask tasks={tasks} adicionar={Adicionar} />
        <ViewTask tasks={tasks} isCompleted={isCompleted} deletar={deletar} />
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
