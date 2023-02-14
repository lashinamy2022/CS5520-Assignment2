import { StyleSheet } from 'react-native';
import React from 'react';

const CommonStyles = StyleSheet.create({
    purpleDark: {
      backgroundColor: "rgb(60,61,132)",
    },
    purpleMedium: {
      backgroundColor: "rgb(127,123,189)",
    },
    purpleLight: {
      backgroundColor: "rgb(154,150,221)",
    },
    plusButton: {
      fontSize:30, 
      color: '#fff', 
      marginRight: 15
    },
    container: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center",
        backgroundColor: "rgb(127,123,189)",
    },
    item: {
      width: 330,
      height: 50,
      borderRadius: 5,
      shadowColor: "black",
      shadowRadius: 3,
      shadowOpacity: 0.2,
      backgroundColor:  "rgb(60,61,132)",
      
    },
    fontWhite: {
      color: '#fff'
    },
    directionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
    },
    directionCol: {
      flexDirection: 'column',
      justifyContent: 'center'
    }
  });

export default CommonStyles;