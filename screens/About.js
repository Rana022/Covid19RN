  
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

export default class App extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <View style={styles.container}>
      <Text style={[globalStyles.heading, {color:'#6A2122'}]}>About This App</Text>
            <Text style={{textAlign: 'center'}}>
            In this app we are trying to track covid-19 casualities over the world.
      we have used apify covid-19 api,so special thanks to apify team.
      </Text>
           </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50
  }
})