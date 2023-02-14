import { StyleSheet, View, Text, TextInput } from "react-native";
import React from "react";

const Input = ({readOnly}) => {
  return (
    <>
      <TextInput value="250"  style={styles.container} readOnly={readOnly}/>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 30,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginRight: 13,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});
