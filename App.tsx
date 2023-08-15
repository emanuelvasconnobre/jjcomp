import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import PreOrder from './src/pages/PreOrder';

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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
