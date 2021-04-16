import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SpainRegions from '../screens/SpainRegions';
import SpainDetails from '../screens/SpainDetails';
import Header from '../screens/shared_screens/Header';

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator initialRouteName="SpainRegions">
        <Stack.Screen
         name="SpainRegions" 
         component={SpainRegions}
         options={ ({navigation}) => {
          return {
           headerTitle: () => <Header navigation={navigation} title='Spain Regions' />
          }
        } }
         />
        <Stack.Screen 
        name="SpainDetails" 
        component={SpainDetails}
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