import 'react-native-gesture-handler';
import 'react-native-reanimated';

import React, { useContext } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import AuthProvider, { AuthContext } from './context/AuthContext';
import AppDrawer from './navigation/AppDrawer';
import LoginScreen from './screens/LoginScreen';

/**
 * RootNavigator choisit l'écran à afficher selon si l'utilisateur est connecté
 */
function RootNavigator() {
  const { user } = useContext(AuthContext);
  return user ? <AppDrawer /> : <LoginScreen />;
}

/**
 * Composant principal de l'application
 */
export default function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <SafeAreaView style={{ flex: 1 }}>
            <RootNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthProvider>
  );
}
