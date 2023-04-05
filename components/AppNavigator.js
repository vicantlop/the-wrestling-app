import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Feed from './Feed';
import Profile from './Profile';
import Camera from './Camera';
import Calendar from './Calendar';
import Journal from './Journal';
import Messaging from './Messaging';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Journal" component={Journal} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Messaging" component={Messaging} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
