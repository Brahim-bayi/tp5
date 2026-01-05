import { createDrawerNavigator } from "@react-navigation/drawer";

import TodoListScreen from "../screens/TodoListScreen";
import TodoDetailsScreen from "../screens/TodoDetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import NativeStack from "./NativeStack";

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Mes tâches">
      {/* 📋 TODOS */}
      <Drawer.Screen
        name="Mes tâches"
        component={TodoListScreen}
        options={{ drawerLabel: "Liste des tâches" }}
      />

      {/* ❌ Caché du Drawer */}
      <Drawer.Screen
        name="Détails"
        component={TodoDetailsScreen}
        options={{ drawerItemStyle: { display: "none" } }}
      />

      {/* 🏠 HOME */}
      <Drawer.Screen name="Accueil" component={HomeScreen} />

      {/* 👤 PROFIL */}
      <Drawer.Screen name="Profil" component={ProfileScreen} />

      {/* 📱 NATIF */}
      <Drawer.Screen
        name="Fonctionnalités natives"
        component={NativeStack}
      />
    </Drawer.Navigator>
  );
}
