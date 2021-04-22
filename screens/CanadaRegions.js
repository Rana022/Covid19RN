import React, { useEffect, useState } from 'react';
import { 
   StyleSheet,
   Text, 
   ScrollView, 
   View, 
   TouchableOpacity, 
   FlatList, 
   ActivityIndicator,
   Linking
} from 'react-native';
import Moment from 'moment';
import { globalStyles } from '../styles/GlobalStyles';


export default function CanadaRegions({navigation}) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.apify.com/v2/key-value-stores/fabbocwKrtxSDf96h/records/LATEST?disableRedirect=true?token=zMBRDmu86bLs4KKBrGvypaQmS')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  
  if(isLoading){
    return(
      <View style={globalStyles.loading}>
      <ActivityIndicator size="large" color="#6A2122" />
    </View>
    )
  }else{
    return (
      <ScrollView>
        <View style={globalStyles.container}>
          <View style={[styles.firstChild, {minHeight: 150, alignItems: 'center', justifyContent: 'center'}]}>
          <Text>
            <Text style={globalStyles.heading}>Infected: </Text>
            <Text style={globalStyles.result}>{data.infected}</Text>
         </Text>

         <Text>
            <Text style={globalStyles.heading}>Deceased: </Text>
            <Text style={globalStyles.result}>{data.deceased}</Text>
         </Text>

         <Text>
            <Text style={globalStyles.heading}>Last Updated: </Text>
            <Text style={globalStyles.result}>{Moment.utc(data.lastUpdatedAtApify).startOf('hour').fromNow()}</Text>
         </Text>

         <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL(data.SOURCE_URL)}>
        Data Source
      </Text>

          </View>
        <FlatList
            data={data.infectedByRegion}
            keyExtractor={item => item.region}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {navigation.navigate('CanadaDetails', item)}} style={globalStyles.child}><Text>{item.region}</Text></TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  firstChild:{
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "100%",
    textAlign: "center"
  }
})