// src/screens/LibraryScreen.tsx
import React from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import TrackCard from '../components/TrackCard';
import { useTheme } from '../hooks/useTheme';

const MOCK = [
  { id: '1', title: 'Sunrise Drive', artist: 'Vinu Beats', duration: '3:24' },
  { id: '2', title: 'Nightfall', artist: 'Vinu Beats', duration: '4:06' },
  { id: '3', title: 'Lo-Fi Hour', artist: 'Vinu Beats', duration: '2:58' },
];

export default function LibraryScreen() {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <FlatList
        data={MOCK}
        keyExtractor={(i) => i.id}
        contentContainerStyle={{ padding: theme.spacing.md }}
        renderItem={({ item }) => <TrackCard track={item} />}
        ItemSeparatorComponent={() => <View style={{ height: theme.spacing.sm }} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
