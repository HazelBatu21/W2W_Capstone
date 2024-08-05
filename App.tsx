import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignUpScreen from './src/assets/screens/SignUp';
import LoginPage from './src/assets/screens/LoginPage';
import HomePage from './src/assets/screens/HomePage';
import WelcomePage from './src/assets/screens/WelcomePage'; // Correct import path
import Scanpage from './src/assets/screens/Scanpage';
import Savedpage from './src/assets/screens/Savedpage';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Scanpage" component={Scanpage} />
        <Stack.Screen name="Savedpage" component={Savedpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
