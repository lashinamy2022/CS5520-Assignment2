import { View, Text, TextInput } from "react-native";
import React from "react";
import CommonStyles from "../styles/CommonStyles";

const Card = ({children, customizedStyle}) => {
  return (
    <View style={[CommonStyles.item, customizedStyle]}>
      {children}
    </View>
  );
};

export default Card;
