import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigation from './routes/DrawerNavigation';
import { LogBox } from 'react-native';
import netConnection from './functions/netInfo';
import OffNetScreen from './screens/offNet';

export default function App() {

  const [connectionStatus, setConnectionStatus] = useState(false);
  netConnection().then(res => setConnectionStatus(res));
  const [loadFonts, setLoadFonts] = useState(false)

  const getFonts = Font.loadAsync({
    'nunito-r': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-b': require('./assets/fonts/Nunito-Bold.ttf'),
    'nunito-l': require('./assets/fonts/Nunito-Light.ttf'),
    'nunito-i': require('./assets/fonts/Nunito-Italic.ttf'),
    'nunito-li': require('./assets/fonts/Nunito-LightItalic.ttf')
  });

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
//first logic
  if(connectionStatus === true){
    if(loadFonts === true){
      return(
           <Navigation />
      )
    }else{
      return(
        <AppLoading
            startAsync={getFonts}
            onFinish={() => setLoadFonts(true)}
            onError={console.warn}
          />
      )
    }
  }else{
    return(<OffNetScreen />)
  }
}
