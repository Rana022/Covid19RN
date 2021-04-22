import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Restart} from 'fiction-expo-restart';

export default function app() {
    return(
      <View style={styles.container}>
        <Text>No Internet Connection</Text>
        <Text>Please Check and Reload</Text>
       <Button style={styles.btn} color="#6A2122" title="Reload" onPress={Restart} />
        </View>
    );
  }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50
  }
})