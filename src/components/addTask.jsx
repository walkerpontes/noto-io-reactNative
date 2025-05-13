import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AddTask({adicionar}){
    const [title, setTitle] = useState("");
    const [description,setDescription] = useState("");


    const add = () => {
        if(!title.trim() || !description.trim()){

            alert("Adicione um título e uma descrição válida")

        }else{

            adicionar(title,description);
            
        }

        setTitle("")
        setDescription("")
     }

    return(
        <View style={styles.body}>
            <Text style={styles.title}>Adicione uma Tarefa</Text>
            <TextInput style={styles.input} placeholder="Título" placeholderTextColor="#000000" value={title} onChangeText={(text)=> setTitle(text)}></TextInput>
            <TextInput  style={styles.input} placeholder="Descrição" placeholderTextColor="#000000" value={description} onChangeText={(text)=> setDescription(text)}></TextInput>
            <TouchableOpacity style={styles.botao} onPress={add}><Text style={{fontSize:20}}>Adicionar</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    
    body:{
        width:"90%",
        height: 400,
        backgroundColor: "#ffffff",
        alignSelf:'center',
        borderRadius:10,
        justifyContent: 'center',
        gap:20,
        marginVertical: 20
    },
    title:{
        fontSize: 30,
        alignSelf:'center',
        marginBottom: 20
    },

    input:{
        width:"90%",
        height:60,
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        fontSize: 20,
        alignSelf: 'center',
        borderStyle:'solid',
        borderBottomWidth: 1,
        borderBottomColor: "#00000055"
    },
    botao:{
        width:"90%",
        height: 40,
        backgroundColor: "#6eb2ff",
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems:"center",
    }
})