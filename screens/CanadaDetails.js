import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles'

export default function CanadaDetails({route}) {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.dChild}>
      <View>
          <Text style={globalStyles.dTitle}>{route.params.region}</Text>
        </View>
      <Text>
        <Text style={globalStyles.heading}>Infected Count: </Text>
        <Text style={globalStyles.result}>{route.params.infectedCount}</Text>
      </Text>

      <Text>
        <Text style={globalStyles.heading}>Deceased Count: </Text>
        <Text style={globalStyles.result}>{route.params.deceasedCount}</Text>
      </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
})