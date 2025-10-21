// src/screens/NowPlayingScreen.tsx
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import PlayerControls from '../components/PlayerControls';
import { useTheme } from '../hooks/useTheme';

export default function NowPlayingScreen() {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <View style={[styles.artContainer, { backgroundColor: theme.colors.surface }]}>
          <Image
            source={{ uri: 'https://placehold.co/600x600/111827/ffffff.png?text=Album' }}
            style={styles.art}
            resizeMode="cover"
          />
        </View>
        <Text style={[styles.title, { color: theme.colors.text }]}>Sunrise Drive</Text>
        <Text style={[styles.artist, { color: theme.colors.muted }]}>Vinu Beats</Text>

        <View style={{ marginTop: theme.spacing.lg }}>
          <PlayerControls />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, alignItems: 'center', paddingTop: 20 },
  artContainer: {
    width: 300,
    height: 300,
    borderRadius: 18,
    overflow: 'hidden',
    elevation: 6,
  },
  art: { width: '100%', height: '100%' },
  title: { marginTop: 20, fontSize: 22, fontWeight: '600' },
  artist: { marginTop: 6, fontSize: 16 },
});
