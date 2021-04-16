import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CountryStack from './CountryStack';
import USAStack from './USAStack';
import CanadaStack from './CanadaStack';
import IndiaStack from './IndiaStack';
import RussiaStack from './RussiaStack';
import SpainStack from './SpainStack';
import AboutStack from './AboutStack';
import DrawerContent from '../screens/DrawerContent';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="CountryStack" component={CountryStack} />
        <Drawer.Screen name="USAStack" component={USAStack} />
        <Drawer.Screen name="CanadaStack" component={CanadaStack} />
        <Drawer.Screen name="IndiaStack" component={IndiaStack} />
        <Drawer.Screen name="RussiaStack" component={RussiaStack} />
        <Drawer.Screen name="SpainStack" component={SpainStack} />
        <Drawer.Screen name="AboutStack" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}