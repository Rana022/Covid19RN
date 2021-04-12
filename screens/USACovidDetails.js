import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Moment from 'moment';
import { globalStyles } from '../styles/GlobalStyles'

export default function CountryCovidDetails({route}) {
  const dt = route.params.lastUpdatedApify
  return (
    <View style={styles.container}>
      <View style={styles.child}>
      <Text>
        <Text style={styles.heading}>Range: </Text>
        <Text style={styles.result}>{route.params.range}</Text>
      </Text>

      <Text>
        <Text style={styles.heading}>Cases Reported: </Text>
        <Text style={styles.result}>{route.params.casesReported}</Text>
      </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  child:{
    minWidth: '100%',
    minHeight: '50%',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    marginHorizontal: "1%",
    marginBottom: 6,
    textAlign: "center",
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading:{
    fontSize: 14,
    fontFamily: 'nunito-b'
  },
  result:{
    fontFamily: 'nunito-li',
    fontSize: 14
  }
})