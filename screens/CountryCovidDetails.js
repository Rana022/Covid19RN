import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Moment from 'moment';
import { globalStyles } from '../styles/GlobalStyles'

export default function CountryCovidDetails({route}) {
  const dt = route.params.lastUpdatedApify
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.dChild}>
      <View>
          <Text style={globalStyles.dTitle}>{route.params.country}</Text>
        </View>
      <Text>
        <Text style={globalStyles.heading}>Infected: </Text>
        <Text style={globalStyles.result}>{route.params.infected}</Text>
      </Text>
      <Text>
        <Text style={globalStyles.heading}>Tested: </Text>
        <Text style={globalStyles.result}>{route.params.tested}</Text>
      </Text>

      <Text>
        <Text style={globalStyles.heading}>Recovered: </Text>
        <Text style={globalStyles.result}>{route.params.recovered}</Text>
      </Text>

      <Text>
        <Text style={globalStyles.heading}>Deceased: </Text>
        <Text style={globalStyles.result}>{route.params.deceased}</Text>
      </Text>

      <Text>
        <Text style={globalStyles.heading}>Last Updated: </Text>
        <Text style={globalStyles.result}>{Moment(dt).startOf('day').fromNow()}</Text>
      </Text>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
})