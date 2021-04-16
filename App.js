import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigation from './routes/DrawerNavigation';
import { View, StyleSheet } from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
  setTestDeviceIDAsync
} from "expo-ads-admob";

const getFonts = Font.loadAsync({
  'nunito-r': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-b': require('./assets/fonts/Nunito-Bold.ttf'),
  'nunito-l': require('./assets/fonts/Nunito-Light.ttf'),
  'nunito-i': require('./assets/fonts/Nunito-Italic.ttf'),
  'nunito-li': require('./assets/fonts/Nunito-LightItalic.ttf')
})

export default function App() {

  const [loadFonts, setLoadFonts] = useState(false)

  useEffect(() => {
    setTestDeviceIDAsync("EMULATOR");
    getInterStitialAds();
  }, []);

  const getInterStitialAds = async () => {
    await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
    await AdMobInterstitial.showAdAsync();
    };

  if(loadFonts){
    return(
      <View style={{flex:1}}>
         <Navigation />
      <View style={styles.ads}>
            <AdMobBanner
            bannerSize="smartBannerPortrait"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
            servePersonalizedAds={false}
            onDidFailToReceiveAdWithError={(e) => console.log(e)}
          />
      </View>
      </View>
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
}

const styles = StyleSheet.create({
  ads:{
    position: 'absolute',
    left: 0,
    bottom: 0
  }
})
