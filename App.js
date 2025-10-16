import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DidYouKnowScreen from './src/components/DidYouKnow/DidYouKnowScreen';
import FlashCardScreen from './src/components/FlashCard/FlashCardScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DidYouKnow"
          component={DidYouKnowScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FlashCard"
          component={FlashCardScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
