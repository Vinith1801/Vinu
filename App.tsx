// App.tsx
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/theme/ThemeProvider';
import AppNavigator from './src/navigation/AppNavigator';
import { View, StyleSheet } from 'react-native';
import MiniPlayer from './src/components/MiniPlayer';
import Header from './src/components/Header';

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <View style={styles.app}>
          <Header />
          <AppNavigator />
          <MiniPlayer />
        </View>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  app: { flex: 1 },
});
