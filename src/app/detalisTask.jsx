import { Navigator, router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import {Feather} from "@expo/vector-icons";
export default function DetalisTask({ route }) {
  const { title, description } = useLocalSearchParams();
  return (
    <View style={styles.body}>
        <View style={styles.cardDetalis} >
            <Feather name ="arrow-left-circle" size={40} onPress={() => router.back()}></Feather>
            <Text style={styles.textDetalis}>Detalhes</Text>
        </View>
        
        <View style={styles.cardTask}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
        
      
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 40,
    backgroundColor:'#eeeeee'
  },
  cardDetalis:{
    flexDirection:'row',
    alignItems:'center',
    gap: 15,
    marginBottom: 50
  },
  textDetalis:{
    fontSize: 40
  },
  cardTask:{
    flexDirection:'column',
    alignItems:'flex-start',
    gap: 25,
    backgroundColor: "#ffffff",
    padding: 40,
    borderRadius: 10
  },
  
  title:{
    fontSize: 25,
    fontWeight:'bold'
  },
  description:{
    fontSize: 20
  }
});
