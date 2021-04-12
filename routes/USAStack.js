import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import USAStates from '../screens/USAStates';
import USACovidDetails from '../screens/USACovidDetails';
import Header from '../screens/shared_screens/Header';

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator initialRouteName="USAStates">
        <Stack.Screen
         name="USAStates" 
         component={USAStates}
         options={ ({navigation}) => {
          return {
           headerTitle: () => <Header navigation={navigation} title='USA States' />
          }
        } }
         />
        <Stack.Screen name="USACovidDetails" component={USACovidDetails} />
      </Stack.Navigator>
  );
}

export default App;