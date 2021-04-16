import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Home from '../screens/Home';
import CountryCovidDetails from '../screens/CountryCovidDetails';
import Header from '../screens/shared_screens/Header';
const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
         name="Home"
        component={Home} 
        options={ ({navigation}) => {
          return {
           headerTitle: () => <Header navigation={navigation} title='Countries' />
          }
        } }
        />
        <Stack.Screen
         name="CountryCovidDetails" 
         component={CountryCovidDetails} 
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