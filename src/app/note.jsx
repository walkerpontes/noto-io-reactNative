import { Text, View } from "react-native";
import AddNote from "../components/addNote";
import ViewNote from "../components/viewNote";
import { useEffect, useState } from "react";
import { randomNumericId } from "./task";
import { armazenar, getDados } from "../localStorage/storage";

export default function Note() {
    const data = new Date();
    const dataformatada = 
    `${String(data.getDate()).padStart(2,'0')}/${String(data.getMonth()).padStart(2,'0')}/${String(data.getFullYear())}`
    

  const [notes, setNotes] = useState([]);
  useEffect(()=>{
    async function carregar() {
      return setNotes(await getDados('notes')|| [])
    }
    carregar()
  },[])

  function deleteNote(id) {
    const newNote = notes.filter((notes) => notes.id != id);
    setNotes(newNote);
  }

  function adicionar(note){
    const newNote = {
        id: randomNumericId(),
        note: note,
        date: dataformatada
    }
    setNotes([newNote, ...notes])
  }

  useEffect(()=>{
    async function fetch() {
      await armazenar('notes',notes)
    }
    fetch()
  },[notes])

  return (
    <View style={{ flex: 1 }}>
      <AddNote adicionar={adicionar}></AddNote>
      <ViewNote notes={notes} deleteNote={deleteNote}></ViewNote>
    </View>
  );
}
