import React from 'react';
import Avtor from '../src/Avtor';
import Pass from '../src/Pass';
import Reg from '../src/Reg';
import Home from '../src/Home';
import Form from '../src/Form';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator(); 


export default function MyStack() {
  return   (
  <NavigationContainer>
    <Stack.Navigator  >
      <Stack.Screen options={{headerShown: false}} name="Avtor" component={Avtor}  />
      <Stack.Screen options={{headerShown: false}} name="Pass" component={Pass}  />
      <Stack.Screen options={{headerShown: false}} name="Reg" component={Reg}  />
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home}  />
      <Stack.Screen name="Форма" component={Form}  />
    </Stack.Navigator>
  </NavigationContainer>
  );
} 