import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        flexWrap: "wrap",
        paddingBottom: 100
      },
      child:{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
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
      dChild:{
        flex: 1,
        minWidth: "100%",
        justifyContent: 'center',
        alignItems: 'center'
      },
      dTitle:{
        color: '#6A2122',
        fontFamily: 'nunito-i'
      }
})
