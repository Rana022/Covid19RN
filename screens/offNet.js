  
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function app(props) {
    return(
      <View style={styles.container}>
        <Text>No Internet Connection</Text>
       <Button color="#6A2122" title="Reload" onPress={props.onCheck} />
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