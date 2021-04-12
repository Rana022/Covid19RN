  
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({navigation, title}) {
    const drawerHandler = () => navigation.openDrawer();
  return (
    <View style={styles.container}>
        {/* icons */}
        <Ionicons name="menu" size={20} color="#333" style={styles.icon} onPress={drawerHandler} />
        <Image
        style={styles.tinyLogo}
        source={require('../../assets/img/logo.png')}
      />
        <View>
          <Text style={styles.titleText}>Covid 19</Text>
          <Text style={styles.pageTitle}>{title}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText:{
        fontFamily: 'nunito-b',
        fontSize: 16,
    },
    pageTitle:{
        fontFamily: 'nunito-li',
        fontSize: 12
    },
    icon:{
        position: 'absolute',
        left: 15
    },
    tinyLogo:{
        width: 20,
        height: 20,
        marginRight: 5
    }
})