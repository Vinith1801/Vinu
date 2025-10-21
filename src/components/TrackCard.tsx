// src/components/TrackCard.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import { Play } from 'lucide-react-native';

type Props = {
  track: { id: string; title: string; artist: string; duration?: string };
};

export default function TrackCard({ track }: Props) {
  const { theme } = useTheme();
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      <View style={styles.info}>
        <Text style={[styles.title, { color: theme.colors.text }]} numberOfLines={1}>
          {track.title}
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.muted }]} numberOfLines={1}>
          {track.artist}
        </Text>
      </View>
      <View style={styles.right}>
        <Text style={[styles.duration, { color: theme.colors.muted }]}>{track.duration}</Text>
        <Play width={20} height={20} stroke={theme.colors.accent} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  info: { flex: 1, paddingRight: 12 },
  title: { fontSize: 16, fontWeight: '600' },
  subtitle: { fontSize: 13, marginTop: 4 },
  right: { alignItems: 'flex-end' },
  duration: { fontSize: 12 },
});
