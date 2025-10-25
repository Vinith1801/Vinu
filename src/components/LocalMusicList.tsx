// src/components/LocalMusicList.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchLocalAudio } from '../utils/getLocalAudio';

export default function LocalMusicList() {
  const [songs, setSongs] = useState<{ path: string; name: string }[]>([]);

  useEffect(() => {
    (async () => {
      const audioFiles = await fetchLocalAudio();
      setSongs(audioFiles);
    })();
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.path}
        renderItem={({ item }) => (
          <Text style={{ marginBottom: 8 }}>{item.name}</Text>
        )}
        ListEmptyComponent={<Text>No audio files found</Text>}
      />
    </View>
  );
}
