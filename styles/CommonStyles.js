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
    container: {
        flex: 1, 
        backgroundColor: "rgb(127,123,189)",
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