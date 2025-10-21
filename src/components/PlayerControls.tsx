// src/components/PlayerControls.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { SkipBack, Play, Pause, SkipForward } from 'lucide-react-native';
import { useTheme } from '../hooks/useTheme';

export default function PlayerControls() {
  const { theme } = useTheme();
  // UI state only for now
  const [isPlaying, setPlaying] = React.useState(false);

  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.iconButton}>
        <SkipBack width={26} height={26} stroke={theme.colors.text} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setPlaying((p) => !p)}
        style={[
          styles.playButton,
          { backgroundColor: theme.colors.accent, shadowColor: '#000' },
        ]}
      >
        {isPlaying ? (
          <Pause width={28} height={28} stroke="#fff" />
        ) : (
          <Play width={28} height={28} stroke="#fff" />
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <SkipForward width={26} height={26} stroke={theme.colors.text} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 280 },
  iconButton: { padding: 12 },
  playButton: {
    width: 76,
    height: 76,
    borderRadius: 76 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
});
