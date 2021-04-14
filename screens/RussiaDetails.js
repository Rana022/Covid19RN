import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

export default function CountryCovidDetails({route}) {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.dChild}>
        <View>
          <Text style={globalStyles.dTitle}>{route.params.region}</Text>
        </View>
      <Text>
        <Text style={globalStyles.heading}>ISO Code: </Text>
        <Text style={globalStyles.result}>{route.params.isoCode}</Text>
      </Text>

      <Text>
        <Text style={globalStyles.heading}>Infected: </Text>
        <Text style={globalStyles.result}>{route.params.infected}</Text>
      </Text>

      <Text>
        <Text style={globalStyles.heading}>Recovered: </Text>
        <Text style={globalStyles.result}>{route.params.recovered}</Text>
      </Text>

      <Text>
        <Text style={globalStyles.heading}>Deceased: </Text>
        <Text style={globalStyles.result}>{route.params.deceased}</Text>
      </Text>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
})