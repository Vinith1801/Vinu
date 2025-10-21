// src/navigation/index.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LibraryScreen from '../screens/LibraryScreen';
import NowPlayingScreen from '../screens/NowPlayingScreen';
import { useTheme } from '../hooks/useTheme';
import { StatusBar } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function AppNavigator() {
  const { theme, mode } = useTheme();

  return (
    <NavigationContainer>
      <StatusBar barStyle={mode === 'dark' ? 'light-content' : 'dark-content'} />
      <Tab.Navigator
        initialRouteName="Library"
        screenOptions={{
          tabBarStyle: { backgroundColor: theme.colors.surface },
          tabBarIndicatorStyle: { backgroundColor: theme.colors.accent },
          tabBarActiveTintColor: theme.colors.text,
          tabBarInactiveTintColor: theme.colors.muted,
        }}
      >
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="NowPlaying" component={NowPlayingScreen} options={{ title: 'Now Playing' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
