// src/components/MiniPlayer.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { Play } from 'lucide-react-native';

export default function MiniPlayer() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <View style={{ flex: 1 }}>
        <Text numberOfLines={1} style={{ color: theme.colors.text, fontWeight: '600' }}>
          Sunrise Drive
        </Text>
        <Text numberOfLines={1} style={{ color: theme.colors.muted, marginTop: 2 }}>
          Vinu Beats
        </Text>
      </View>

      <TouchableOpacity style={styles.play}>
        <Play width={20} height={20} stroke={theme.colors.accent} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 68,
    paddingHorizontal: 14,
    borderTopWidth: 1,
    borderColor: '#00000010',
    flexDirection: 'row',
    alignItems: 'center',
  },
  play: {
    padding: 10,
    borderRadius: 10,
  },
});
