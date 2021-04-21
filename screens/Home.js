import React, { useEffect, useState } from 'react';
import { 
   StyleSheet,
   Text, 
   View, 
   TouchableOpacity, 
   FlatList, 
   ActivityIndicator
} from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';


export default function Home({navigation}) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  

  useEffect(() => {
    loadData()
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    loadData();
    setRefreshing(false);
  }

  const loadData = () => {
    return fetch('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true?token=zMBRDmu86bLs4KKBrGvypaQmS')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }
  
  if(isLoading){
    return(
      <View style={globalStyles.loading}>
      <ActivityIndicator size="large" color="#6A2122" />
    </View>
    )
  }else{
    return (
        <View style={globalStyles.container}>
        <FlatList
            onRefresh={onRefresh}
            refreshing={refreshing}
            data={data}
            keyExtractor={item => item.country}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {navigation.navigate('CountryCovidDetails', item)}} style={globalStyles.child}><Text>{item.country}</Text></TouchableOpacity>
            )}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  
})