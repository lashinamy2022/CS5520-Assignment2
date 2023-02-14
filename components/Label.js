import { View, Text } from "react-native";
import React from "react";
import CommonStyles from "../styles/CommonStyles";

const Label = ({ content }) => {
  return (
    <>
      <Text
        style={[CommonStyles.fontWhite, { fontWeight: "bold", marginLeft: 13 }]}
      >
        {content}
      </Text>
    </>
  );
};

export default Label;
