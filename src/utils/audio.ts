import { PermissionsAndroid, Platform } from 'react-native';
import RNFS from 'react-native-fs';

export async function requestStoragePermission() {
  if (Platform.OS !== 'android') return true;

  try {
    if (Platform.Version >= 33) {
      const audioPerm = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO,
        {
          title: 'Audio Permission',
          message: 'This app needs access to your music files',
          buttonPositive: 'OK',
        }
      );
      return audioPerm === PermissionsAndroid.RESULTS.GRANTED;
    } else if (Platform.Version >= 30) {
      const managePerm = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'This app needs full access to storage to find your songs',
          buttonPositive: 'OK',
        }
      );
      return managePerm === PermissionsAndroid.RESULTS.GRANTED;
    } else {
      const readPerm = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'This app needs access to your music files',
          buttonPositive: 'OK',
        }
      );
      return readPerm === PermissionsAndroid.RESULTS.GRANTED;
    }
  } catch (err) {
    console.warn('Permission error', err);
    return false;
  }
}

export async function fetchLocalAudioFiles(): Promise<string[]> {
  const granted = await requestStoragePermission();
  if (!granted) {
    console.log('Permission denied');
    return [];
  }

  // Search for common audio folders
  const musicDir = `${RNFS.ExternalStorageDirectoryPath}/Music`;
  const downloadsDir = `${RNFS.ExternalStorageDirectoryPath}/Download`;

  let files: string[] = [];
  for (const dir of [musicDir, downloadsDir]) {
    try {
      const list = await RNFS.readDir(dir);
      const audioFiles = list
        .filter(f => f.isFile() && f.name.match(/\.(mp3|m4a|wav|flac)$/i))
        .map(f => f.path);
      files = [...files, ...audioFiles];
    } catch (e) {
      console.log('Directory not found:', dir);
    }
  }

  console.log('🎵 Found files:', files);
  return files;
}
