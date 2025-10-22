// src/screens/PlaylistScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../hooks/useTheme';

const samplePlaylists = [
  { id: '1', title: 'Chill Vibes', tracks: 15, cover: 'https://placehold.co/150x150/111827/ffffff.png' },
  { id: '2', title: 'Workout', tracks: 22, cover: 'https://placehold.co/150x150/FF5252/ffffff.png' },
];

export default function PlaylistScreen() {
  const { theme } = useTheme();

  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={[styles.card, { backgroundColor: theme.colors.surface }]}>
      <Image source={{ uri: item.cover }} style={styles.cover} />
      <Text style={[styles.title, { color: theme.colors.text }]} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={[styles.subtitle, { color: theme.colors.muted }]}>{item.tracks} tracks</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <FlatList
        data={samplePlaylists}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 16 }}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  card: { flex: 1, borderRadius: 18, padding: 12, alignItems: 'center' },
  cover: { width: 140, height: 140, borderRadius: 12, marginBottom: 8 },
  title: { fontSize: 16, fontWeight: '600' },
  subtitle: { fontSize: 12, marginTop: 4 },
});
