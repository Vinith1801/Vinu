// src/screens/SearchScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import TrackCard from '../components/TrackCard';
import { useTheme } from '../hooks/useTheme';

const sampleTracks = [
  { id: '1', title: 'Sunrise Drive', artist: 'Vinu Beats', duration: '3:45' },
  { id: '2', title: 'Chillwave', artist: 'Vinu Beats', duration: '4:20' },
];

export default function SearchScreen() {
  const { theme } = useTheme();
  const [query, setQuery] = useState('');

  const filteredTracks = sampleTracks.filter(t =>
    t.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <TextInput
        placeholder="Search tracks, artists..."
        placeholderTextColor={theme.colors.muted}
        style={[styles.input, { backgroundColor: theme.colors.surface, color: theme.colors.text }]}
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={filteredTracks}
        renderItem={({ item }) => <TrackCard track={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  input: { borderRadius: 12, paddingHorizontal: 16, paddingVertical: 10, fontSize: 16, margin: 16 },
});
