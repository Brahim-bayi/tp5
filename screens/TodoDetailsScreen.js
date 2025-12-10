import { View, Text } from "react-native";
import AppBar from "../components/AppBar";

export default function TodoDetailsScreen({ route }) {
  const { id, title } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <AppBar title="Détails" />

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>{title}</Text>
        <Text style={{ fontSize: 18, marginTop: 10 }}>ID : {id}</Text>
      </View>
    </View>
  );
}
