import { StyleSheet, View, Text, TextInput } from "react-native";
import React from "react";
import CommonStyles from "../styles/CommonStyles";

const Input = ({customizedStyle}) => {
  return (
    <>
      <TextInput value="" style={[styles.container, customizedStyle]} />
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
    },
    CommonStyles.purpleLight,
  ],
});
