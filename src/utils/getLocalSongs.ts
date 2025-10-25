// src/utils/getLocalSongs.ts
import { PermissionsAndroid, Platform } from 'react-native';
import MusicFiles from 'react-native-get-music-files';

export async function requestStoragePermission(): Promise<boolean> {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Storage Permission',
        message: 'App needs access to your music files',
        buttonPositive: 'OK',
      }
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
  return true;
}

export async function fetchLocalSongs() {
  const hasPermission = await requestStoragePermission();
  if (!hasPermission) {
    console.warn('Storage permission denied');
    return [];
  }

  try {
    const songs = await MusicFiles.getAll({
      blured: false,
      artist: true,
      duration: true,
      cover: false,
      genre: true,
      title: true,
      minimumSongDuration: 10000, // in milliseconds
      fields: ['title', 'artist', 'duration', 'genre'],
    });
    return songs;
  } catch (error) {
    console.error('Error fetching songs:', error);
    return [];
  }
}
