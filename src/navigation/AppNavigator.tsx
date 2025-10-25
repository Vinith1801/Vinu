// src/navigation/AppNavigator.tsx
import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../hooks/useTheme';

import LibraryScreen from '../screens/LibraryScreen';
import NowPlayingScreen from '../screens/NowPlayingScreen';
import PlaylistScreen from '../screens/PlaylistScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';

import { Music, PlayCircle, List, Search, Settings2Icon } from 'lucide-react-native';

const Tab = createBottomTabNavigator();

const SCREENS = [
  { name: 'Library', component: LibraryScreen, icon: Music },
  { name: 'NowPlaying', component: NowPlayingScreen, icon: PlayCircle },
  { name: 'Playlists', component: PlaylistScreen, icon: List },
  { name: 'Search', component: SearchScreen, icon: Search },
  { name: 'Settings', component: SettingsScreen, icon: Settings2Icon },
];

export default function AppNavigator() {
  const { theme, mode } = useTheme();

  const navigationTheme = {
    ...(mode === 'dark' ? DarkTheme : DefaultTheme),
    colors: {
      ...(mode === 'dark' ? DarkTheme.colors : DefaultTheme.colors),
      background: theme.colors.background,
      card: theme.colors.surface,
      text: theme.colors.text,
      border: theme.colors.muted,
      primary: theme.colors.accent,
    },
  };

  const renderTabIcon = (Icon: any, focused: boolean) => (
    <View
      style={[
        styles.iconContainer,
        {
          backgroundColor: focused ? theme.colors.accent + '20' : 'transparent',
        },
      ]}
    >
      <Icon
        width={24}
        height={24}
        stroke={focused ? theme.colors.accent : theme.colors.muted}
      />
    </View>
  );

  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: [
            styles.tabBar,
            {
              backgroundColor: theme.colors.surface,
              borderRadius: 30,
              height: 70,
              marginHorizontal: 20,
              marginBottom: 20,
              shadowColor: '#000',
              shadowOpacity: 0.08,
              shadowRadius: 6,
              shadowOffset: { width: 0, height: 4 },
              elevation: 6,
            },
          ],
        }}
      >
        {SCREENS.map(({ name, component, icon }) => (
          <Tab.Screen
            key={name}
            name={name}
            component={component}
            options={{
              tabBarIcon: ({ focused }) => renderTabIcon(icon, focused),
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 0,
    elevation: 6,
  },
  iconContainer: {
    position: 'absolute',
    top: -10,
    borderRadius: 24,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
