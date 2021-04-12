  
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles'

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About</Text>
    </View>
  );
}