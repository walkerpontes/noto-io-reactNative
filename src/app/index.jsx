import {
  View,
  Text,
  StyleSheet,
  Alert,
  Button,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import CardTop from '../components/cardTop';
import CardBottom from '../components/cardBottom';

export default function Home() {
  const { height } = Dimensions.get("window");

  return (
    <View>
      <StatusBar backgroundColor="#000" barStyle="light-content"></StatusBar>
      <View style={{ height, backgroundColor: "#f3f3f3" }}>
        <CardTop></CardTop>
        <CardBottom></CardBottom>
      </View>
    </View>  
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  title: {
    fontSize: 30,
  },
});