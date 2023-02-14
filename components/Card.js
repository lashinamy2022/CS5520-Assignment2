import { StyleSheet, View, Text, TextInput } from "react-native";
import React from "react";

const Card = ({children, customizedStyle}) => {
  return (
    <View style={[styles.item, customizedStyle]}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  item: {
    width: 330,
    height: 50,
    borderRadius: 5,
    shadowColor: "black",
    shadowRadius: 3,
    shadowOpacity: 0.2,
    backgroundColor:  "rgb(60,61,132)",
  },
});