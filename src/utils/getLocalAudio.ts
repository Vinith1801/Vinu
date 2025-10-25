// src/utils/getLocalAudio.ts
import RNFS from 'react-native-fs';
import { requestStoragePermission } from './storage';

const AUDIO_EXTENSIONS = ['mp3', 'm4a', 'wav', 'flac'];

export async function fetchLocalAudio(): Promise<{ path: string; name: string }[]> {
  const hasPermission = await requestStoragePermission();
  if (!hasPermission) return [];

  const musicDir = RNFS.ExternalStorageDirectoryPath + '/Music'; // default music folder
  let files: { path: string; name: string }[] = [];

  async function scanDir(dir: string) {
    try {
      const items = await RNFS.readDir(dir);
      for (const item of items) {
        if (item.isFile() && AUDIO_EXTENSIONS.some(ext => item.name.endsWith(ext))) {
          files.push({ path: item.path, name: item.name });
        } else if (item.isDirectory()) {
          await scanDir(item.path); // recursive scan
        }
      }
    } catch (err) {
      console.warn('Failed to scan directory', dir, err);
    }
  }

  await scanDir(musicDir);
  return files;
}
