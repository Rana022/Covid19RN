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
import { globalStyles } from '../styles/GlobalStyles';



export default function Home({navigation}) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.apify.com/v2/key-value-stores/lluBbYoQVN65R3BGO/records/LATEST?disableRedirect=true?token=zMBRDmu86bLs4KKBrGvypaQmS')
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
            <Text style={globalStyles.heading}>Recovered: </Text>
            <Text style={globalStyles.result}>{data.recovered}</Text>
         </Text>

         <Text>
            <Text style={globalStyles.heading}>Tested: </Text>
            <Text style={globalStyles.result}>{data.tested}</Text>
         </Text>

         <Text>
            <Text style={globalStyles.heading}>Deceased: </Text>
            <Text style={globalStyles.result}>{data.deceased}</Text>
         </Text>

         <Text>
            <Text style={globalStyles.heading}>Hospitalised: </Text>
            <Text style={globalStyles.result}>{data.hospitalised}</Text>
         </Text>

         <Text>
            <Text style={globalStyles.heading}>ICU: </Text>
            <Text style={globalStyles.result}>{data.ICU}</Text>
         </Text>

         <Text>
            <Text style={globalStyles.heading}>Newly Deceased: </Text>
            <Text style={globalStyles.result}>{data.newlyDeceased}</Text>
         </Text>

         <Text>
            <Text style={globalStyles.heading}>Newly Hospitalised: </Text>
            <Text style={globalStyles.result}>{data.newlyHospitalised}</Text>
         </Text>

         <Text>
            <Text style={globalStyles.heading}>Newly In ICU: </Text>
            <Text style={globalStyles.result}>{data.NewlyInICU}</Text>
         </Text>

         <Text>
            <Text style={globalStyles.heading}>Daily Infected: </Text>
            <Text style={globalStyles.result}>{data.dailyInfected}</Text>
         </Text>

         <Text>
            <Text style={globalStyles.heading}>Last Updated: </Text>
            <Text style={globalStyles.result}>{Moment(data.lastUpdatedAtSource).startOf('day').fromNow()}</Text>
         </Text>
          </View>
        <FlatList
            data={data.regions}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {navigation.navigate('SpainDetails', item)}} style={globalStyles.child}><Text>{item.name}</Text></TouchableOpacity>
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