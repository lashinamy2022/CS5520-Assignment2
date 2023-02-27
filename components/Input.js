import { StyleSheet, View, Text, TextInput } from "react-native";
import React from "react";
import CommonStyles from "../styles/CommonStyles";

const Input = ({ customizedStyle, value, setEnteredValue, isMultiline }) => {
  return (
    <>
      <TextInput
        value={value}
        style={[styles.container, customizedStyle]}
        onChangeText={(changedText) => {
          setEnteredValue(changedText);
        }}
        multiline={isMultiline}
        textAlignVertical="top"
      />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: [
    {
      width: 220,
      height: 35,
      borderRadius: 5,
      fontSize: 20
    },
    CommonStyles.purpleLight,
  ],
});
