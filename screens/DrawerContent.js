import React from 'react';
import { 
   StyleSheet,
   Text, 
   View,
   Image
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
  } from '@react-navigation/drawer';

  export default function DrawerContent(props){
   return (
        <View style={styles.container}>
             
             {/* drawer profile */}
             <View style={styles.header}>
              <Image
                  style={styles.image }
                  source={require('../assets/img/logo.png')}
      />
      <View style={styles.headerPortion}>
         <Text style={styles.appName}>Covid-19 Tracker</Text>
         <Text style={styles.caption}>Hello World</Text>
      </View>
              </View>
           <DrawerContentScrollView {...props}>
              {/* items */}

              <View style={styles.drawItem}>
              <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/worldwide.png')}
             />
             <DrawerItem
                 style={{flex: 5}}
                  label="World Wide"
                  onPress={() => {
                     // Navigate using the `navigation` prop that you received
                     props.navigation.navigate('CountryStack');
                   }}
               />
             </View>

              <View style={styles.drawItem}>
              <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/united-states.png')}
             />
             <DrawerItem
                 style={{flex: 5}}
                  label="United States"
                  onPress={() => {
                     // Navigate using the `navigation` prop that you received
                     props.navigation.navigate('USAStack');
                   }}
               />
             </View>

             <View style={styles.drawItem}>
              <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/canada.png')}
             />
             <DrawerItem
                 style={{flex: 5}}
                  label="Canada"
                  onPress={() => {
                     // Navigate using the `navigation` prop that you received
                     props.navigation.navigate('CanadaStack');
                   }}
               />
             </View>

             <View style={styles.drawItem}>
              <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/india.png')}
             />
             <DrawerItem
                 style={{flex: 5}}
                  label="India"
                  onPress={() => {
                     // Navigate using the `navigation` prop that you received
                     props.navigation.navigate('IndiaStack');
                   }}
               />
             </View>

             <View style={styles.drawItem}>
              <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/russia.png')}
             />
             <DrawerItem
                 style={{flex: 5}}
                  label="Russia"
                  onPress={() => {
                     // Navigate using the `navigation` prop that you received
                     props.navigation.navigate('RussiaStack');
                   }}
               />
             </View>

             <View style={styles.drawItem}>
              <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/spain.png')}
             />
             <DrawerItem
                 style={{flex: 5}}
                  label="Spain"
                  onPress={() => {
                     // Navigate using the `navigation` prop that you received
                     props.navigation.navigate('SpainStack');
                   }}
               />
             </View>

             <View style={styles.drawItem}>
              <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/img/info.png')}
             />
             <DrawerItem
                 style={{flex: 5}}
                  label="About"
                  onPress={() => {
                     // Navigate using the `navigation` prop that you received
                     props.navigation.navigate('AboutStack');
                   }}
               />
             </View>

          </DrawerContentScrollView>
        </View>
      

    );
  }

  const styles = StyleSheet.create({
     container:{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 40
     },
     header:{
        flexDirection: 'row',
     },
     image:{
        width: 40,
        height: 40
     },
     headerPortion:{
        flex: 4,
        marginLeft: 10
     },
     appName:{
        fontFamily: 'nunito-b',
        fontSize: 14
     },
     caption:{
        fontFamily: 'nunito-li',
        fontSize: 12
     },
     drawItem:{
         flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
     }
  })