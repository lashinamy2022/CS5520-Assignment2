import { StyleSheet, View, Text, TextInput } from "react-native";
import React from "react";
import CommonStyles from "../styles/CommonStyles";

const Card = ({children, customizedStyle}) => {
  return (
    <View style={[styles.item, CommonStyles.commonCardStyle, customizedStyle]}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  item: {
    width: 330,
    height: 50,
    backgroundColor:  "rgb(60,61,132)",
  },
});