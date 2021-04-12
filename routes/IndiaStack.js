import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IndiaRegions from '../screens/IndiaRegions';
import IndiaDetails from '../screens/IndiaRegionDetails';
import Header from '../screens/shared_screens/Header';

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator initialRouteName="IndiaRegions">
        <Stack.Screen
         name="IndiaRegions" 
         component={IndiaRegions}
         options={ ({navigation}) => {
          return {
           headerTitle: () => <Header navigation={navigation} title='India Regions' />
          }
        } }
         />
        <Stack.Screen name="IndiaDetails" component={IndiaDetails} />
      </Stack.Navigator>
  );
}

export default App;