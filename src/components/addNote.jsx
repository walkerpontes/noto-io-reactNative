import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function addNote({adicionar}) {
  const [note, setNote] = useState("");
  const [altura, setAltura] = useState(100);

  return (
    <View style={styles.cardNt}>
      <TextInput
        multiline
        placeholder="Adicione um nota..."
        style={styles.input}
        value={note}
        onChangeText={setNote}
        onContentSizeChange={(e) =>
          setAltura(e.nativeEvent.contentSize.height)
        }
      />
      <TouchableOpacity style={styles.button} onPress={()=> {
        adicionar(note)
        setNote('')
        setAltura(100)
        }}>
        <Text style={{fontSize:20}}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardNt: {
    width: "90%",
    backgroundColor: "#ffffff",
    padding: 40,
    paddingVertical: 50,
    alignSelf: "center",
    gap: 50,
    marginTop: 50,
    borderRadius:10
  },
  input: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    textAlignVertical: "top",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#6eb2ff",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
});
