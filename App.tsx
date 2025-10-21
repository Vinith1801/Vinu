// App.tsx
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/theme/ThemeProvider';
import AppNavigator from './src/navigation';
import { View, StyleSheet } from 'react-native';
import MiniPlayer from './src/components/MiniPlayer';

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <View style={styles.app}>
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
