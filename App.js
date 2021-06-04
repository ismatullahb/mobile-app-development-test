import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';
import ForthScreen from './src/screens/ForthScreen';
import { Provider } from 'react-redux';
import store from './store'

const Stack = createStackNavigator()

function StackScreen() {
  return(
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'grey' },
        headerTitleAlign: 'center',
        headerTitleStyle: { color: 'white' }
      }}
    >
      <Stack.Screen name='FirstScreen' component={FirstScreen} options={{ headerShown: false }} />
      <Stack.Screen name='SecondScreen' component={SecondScreen} options={{ headerShown: false }} />
      <Stack.Screen name='ThirdScreen' component={ThirdScreen} options={{ title: 'EVENTS' }} />
      <Stack.Screen name='ForthScreen' component={ForthScreen} options={{ title: 'GUESTS' }} />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackScreen/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
