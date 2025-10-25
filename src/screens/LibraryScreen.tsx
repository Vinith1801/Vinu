// src/screens/LibraryScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import RNFS from 'react-native-fs';
import TrackCard from '../components/TrackCard';
import { useTheme } from '../hooks/useTheme';

type Track = {
  id: string;
  title: string;
  artist?: string;
  duration?: string;
  path: string;
};

export default function LibraryScreen() {
  const { theme } = useTheme();
  const [tracks, setTracks] = useState<Track[]>([]);

  // ✅ Request permissions based on Android version
  const requestStoragePermission = async (): Promise<boolean> => {
    if (Platform.OS !== 'android') return true;

    try {
      if (Platform.Version >= 33) {
        const result = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO,
          {
            title: 'Audio Permission',
            message: 'This app needs access to your music files.',
            buttonPositive: 'OK',
          }
        );
        return result === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        const result = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'This app needs access to your music files.',
            buttonPositive: 'OK',
          }
        );
        return result === PermissionsAndroid.RESULTS.GRANTED;
      }
    } catch (err) {
      console.warn('Permission error', err);
      return false;
    }
  };

  // ✅ Fetch local songs
  const fetchLocalTracks = async () => {
    const granted = await requestStoragePermission();
    if (!granted) return;

    const dirs = [`${RNFS.ExternalStorageDirectoryPath}/Music`, `${RNFS.ExternalStorageDirectoryPath}/Download`];
    const foundTracks: Track[] = [];

    for (const dir of dirs) {
      try {
        const files = await RNFS.readDir(dir);
        const audioFiles = files.filter(f => f.isFile() && f.name.match(/\.(mp3|m4a|wav|flac)$/i));
        audioFiles.forEach(f => {
          foundTracks.push({
            id: f.path,
            title: f.name.replace(/\.(mp3|m4a|wav|flac)$/i, ''),
            artist: 'Unknown Artist',
            duration: '',
            path: f.path,
          });
        });
      } catch (e) {
        console.log('Skipping:', dir);
      }
    }

    setTracks(foundTracks);
  };

  useEffect(() => {
    fetchLocalTracks();
  }, []);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {tracks.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: theme.colors.muted }}>No local songs found</Text>
        </View>
      ) : (
        <FlatList
          data={tracks}
          keyExtractor={(i) => i.id}
          contentContainerStyle={{ padding: theme.spacing.md }}
          renderItem={({ item }) => <TrackCard track={item} />}
          ItemSeparatorComponent={() => <View style={{ height: theme.spacing.sm }} />}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
