import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CanadaRegions from '../screens/CanadaRegions';
import CanadaDetails from '../screens/CanadaDetails';
import Header from '../screens/shared_screens/Header';

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator initialRouteName="CanadaRegions">
        <Stack.Screen
         name="CanadaRegions" 
         component={CanadaRegions}
         options={ ({navigation}) => {
          return {
           headerTitle: () => <Header navigation={navigation} title='Canada Regions' />
          }
        } }
         />
        <Stack.Screen 
        name="CanadaDetails" 
        component={CanadaDetails} 
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