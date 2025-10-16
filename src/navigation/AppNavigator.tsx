// AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import { enableScreens } from 'react-native-screens';
enableScreens();


const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
