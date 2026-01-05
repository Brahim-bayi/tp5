import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function AppBar({ title }) {
  const { logout } = useContext(AuthContext);

  return (
    <View
      style={{
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2f80ed",
      }}
    >
      {back && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: "#fff", marginRight: 10 }}>⬅</Text>
        </TouchableOpacity>
      )}
      <Text style={{ color: "#fff", fontSize: 18 }}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: 60,
    backgroundColor: "#eee",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
