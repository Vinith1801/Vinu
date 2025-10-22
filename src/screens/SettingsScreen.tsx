// src/screens/SettingsScreen.tsx
import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export default function SettingsScreen() {
  const { theme, mode, toggle } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.row, { borderBottomColor: theme.colors.muted }]}>
        <Text style={{ color: theme.colors.text, fontSize: 16 }}>Dark Mode</Text>
        <Switch value={mode === 'dark'} onValueChange={toggle} thumbColor={theme.colors.accent} />
      </View>
      {/* Add more settings options here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16, borderBottomWidth: 0.5 },
});
