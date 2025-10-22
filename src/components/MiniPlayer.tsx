// src/components/MiniPlayer.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { Play } from 'lucide-react-native';

export default function MiniPlayer({ onExpand }: { onExpand?: () => void }) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onExpand}
      style={[styles.container, { backgroundColor: theme.colors.surface }]}
    >
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 68,
    paddingHorizontal: 14,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#00000020',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: -2 },
    elevation: 6,
  },
  play: {
    padding: 10,
    borderRadius: 10,
  },
});
