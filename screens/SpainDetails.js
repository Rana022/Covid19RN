import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

export default function CountryCovidDetails({route}) {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.dChild}>
        <View>
          <Text style={globalStyles.dTitle}>{route.params.name}</Text>
        </View>
      <Text>
        <Text style={globalStyles.heading}>Infected: </Text>
        <Text style={globalStyles.result}>{route.params.infected}</Text>
      </Text>

      <Text>
        <Text style={globalStyles.heading}>Deceased : </Text>
        <Text style={globalStyles.result}>{route.params.deceased}</Text>
      </Text>

      <Text>
        <Text style={globalStyles.heading}>Hospitalised: </Text>
        <Text style={globalStyles.result}>{route.params.hospitalised}</Text>
      </Text>

      <Text>
        <Text style={globalStyles.heading}>ICU: </Text>
        <Text style={globalStyles.result}>{route.params.ICU}</Text>
      </Text>

      <Text>
        <Text style={globalStyles.heading}>Daily Infected: </Text>
        <Text style={globalStyles.result}>{route.params.dailyInfected}</Text>
      </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
})