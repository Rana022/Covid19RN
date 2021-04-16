import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Moment from 'moment';
import { globalStyles } from '../styles/GlobalStyles'

export default function USADetails({route}) {
  const dt = route.params.lastUpdatedApify
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.dChild}>
      <View>
          <Text style={globalStyles.dTitle}>{route.params.name}</Text>
        </View>
      <Text>
        <Text style={globalStyles.heading}>Range: </Text>
        <Text style={globalStyles.result}>{route.params.range}</Text>
      </Text>

      <Text>
        <Text style={globalStyles.heading}>Cases Reported: </Text>
        <Text style={globalStyles.result}>{route.params.casesReported}</Text>
      </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
})