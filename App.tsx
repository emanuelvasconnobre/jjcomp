import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, PreOrder, Search } from './src/pages';
import { Tabs } from 'expo-router';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="login"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="preorder" component={PreOrder} />
          <Stack.Screen name="search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
