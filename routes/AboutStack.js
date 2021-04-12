import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import Header from '../screens/shared_screens/Header';

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator initialRouteName="About">
        <Stack.Screen
         name="About" 
         component={About} 
         options={ ({navigation}) => {
          return {
           headerTitle: () => <Header navigation={navigation} title='About' />
          }
        } }
         />
      </Stack.Navigator>
  );
}

export default App;