/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import ConfigureStore from './redux/configureStore';
import DashboardView from './views/dashboard/index';

const Stack = createStackNavigator();

const App = () => {
  const store = ConfigureStore();
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTransparent: true, headerTitleStyle: {display: 'flex',textAlign: 'center'}, headerShown: false, }}>
          {/* <Stack.Screen name="login" component={LoginView} /> */}
          <Stack.Screen name="dashboard" component={DashboardView} />
          {/* <Stack.Screen name="home" component={Home} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default App;
