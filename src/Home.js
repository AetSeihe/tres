import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import Hom from '../src/Hom';
import Der from '../src/Der';
import Logaut from '../src/Logaut';
import Nuw from '../src/Nuw';
import Setting from '../src/Setting';
import Form from '../src/Form';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator(); 

const Home = () => {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Существующие" component={Hom} />
        <Drawer.Screen name="Новые" component={Nuw} />
        <Drawer.Screen name="Дерево" component={Der} />
        <Drawer.Screen name="Настройки" component={Setting} />
        <Drawer.Screen name="Выйти" component={Logaut} />
      </Drawer.Navigator>
  );
}

export default Home;