import { useEffect, useState, useContext } from "react"; 
import { View, StyleSheet, ActivityIndicator } from "react-native"; 
import { initDB } from "./services/database"; 
import { ThemeProvider, ThemeContext } from "./context/ThemeContext"; 
import TodoListOfflineScreen from "./screens/TodoListOfflineScreen"; 
import { AuthProvider } from "./context/AuthContext";
import AppStack from "./navigation/AppStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
function MainApp() {  const { theme } = useContext(ThemeContext); 
 
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <AppStack />
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
 
export default function App() { 
 const [dbReady, setDbReady] = useState(false); 
 
 useEffect(() => { 
   const prepareDb = async () => { await initDB();   // attendre SQLite 
     setDbReady(true); // OK pour afficher l’app 
   }; 
 
   prepareDb(); 
 }, []); 
 
 if (!dbReady) { 
   return <ActivityIndicator size="large" />; 
 } 
 
 return ( 
   <ThemeProvider> 
     <MainApp /> 
   </ThemeProvider> 
 ); 
} 
 
 
const styles = StyleSheet.create({ 
 container: { 
   flex: 1, 
   paddingTop: 40, 
 }, 
 light: { 
   backgroundColor: "#ffffff", 
 }, 
dark: { 
backgroundColor: "#121212", 
}, 
});
