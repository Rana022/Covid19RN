import React from 'react';
import { Linking, Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

export default function CountryCovidDetails({route}) {
  const dt = route.params.lastUpdatedApify
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.dChild}>
        <View>
          <Text style={globalStyles.dTitle}>{route.params.region}</Text>
        </View>
      <Text>
        <Text style={globalStyles.heading}>Total Infected: </Text>
        <Text style={globalStyles.result}>{route.params.totalInfected}</Text>
      </Text>

      <Text>
        <Text style={globalStyles.heading}>New Infected: </Text>
        <Text style={globalStyles.result}>{route.params.newInfected}</Text>
      </Text>

      <Text>
        <Text style={globalStyles.heading}>Recovered: </Text>
        <Text style={globalStyles.result}>{route.params.recovered}</Text>
      </Text>

      <Text>
        <Text style={globalStyles.heading}>New Recovered: </Text>
        <Text style={globalStyles.result}>{route.params.newRecovered}</Text>
      </Text>

      <Text>
        <Text style={globalStyles.heading}>Deceased: </Text>
        <Text style={globalStyles.result}>{route.params.deceased}</Text>
      </Text>

      <Text>
        <Text style={globalStyles.heading}>New Deceased: </Text>
        <Text style={globalStyles.result}>{route.params.newDeceased}</Text>
      </Text>

      
      </View>
    </View>
  );
}
