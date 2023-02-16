import { View, Text } from "react-native";
import React from "react";
import CommonStyles from "../styles/CommonStyles";

const Label = ({ content, customizedStyle }) => {
  return (
    <>
      <Text
        style={[CommonStyles.fontWhite, { fontWeight: "bold"}, customizedStyle]}
      >
        {content}
      </Text>
    </>
  );
};

export default Label;
