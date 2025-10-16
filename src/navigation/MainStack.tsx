// MainStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';

export type RootStackParamList = {
  Tabs: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default MainStack;
