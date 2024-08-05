import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUp'; // Ensure this file exists
import Scanpage from './Scanpage';
import Savedpage from './Savedpage'; // Import Savedpage here

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide header if not needed
        }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Scanpage" component={Scanpage} />
        <Stack.Screen name="Savedpage" component={Savedpage} /> {/* Add Savedpage */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
