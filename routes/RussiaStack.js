import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RussiaRegions from '../screens/RussiaRegions';
import RussiaDetails from '../screens/RussiaDetails';
import Header from '../screens/shared_screens/Header';

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator initialRouteName="USAStates">
        <Stack.Screen
         name="RussiaRegions" 
         component={RussiaRegions}
         options={ ({navigation}) => {
          return {
           headerTitle: () => <Header navigation={navigation} title='Russia Regions' />
          }
        } }
         />
        <Stack.Screen 
        name="RussiaDetails" 
        component={RussiaDetails} 
        options={
          {
            title: 'Details'
          }
        }
        />
      </Stack.Navigator>
  );
}

export default App;