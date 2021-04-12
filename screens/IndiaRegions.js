import React, { useEffect, useState } from 'react';
import { 
   StyleSheet,
   Text, 
   ScrollView, 
   View, 
   TouchableOpacity, 
   FlatList, 
   ActivityIndicator
} from 'react-native';
import Moment from 'moment';


export default function Home({navigation}) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true?token=zMBRDmu86bLs4KKBrGvypaQmS')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  
  if(isLoading){
    return(
      <View style={styles.loading}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
    )
  }else{
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.firstChild, {minHeight: 150, alignItems: 'center', justifyContent: 'center'}]}>
          <Text>
            <Text style={styles.heading}>Active Cases: </Text>
            <Text style={styles.result}>{data.activeCases}</Text>
         </Text>

         <Text>
            <Text style={styles.heading}>Active Cases: </Text>
            <Text style={styles.result}>{data.activeCasesNew}</Text>
         </Text>

         <Text>
            <Text style={styles.heading}>Recovered: </Text>
            <Text style={styles.result}>{data.recovered}</Text>
         </Text>
          </View>
        <FlatList
            data={data.regionData}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {navigation.navigate('IndiaDetails', item)}} style={styles.child}><Text>{item.region}</Text></TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: "wrap",
    padding: 10
  },
  child:{
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "100%",
    textAlign: "center"
  },
  loading:{
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  heading:{
    fontSize: 14,
    fontFamily: 'nunito-b'
  },
  result:{
    fontFamily: 'nunito-l',
    fontSize: 14
  },
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