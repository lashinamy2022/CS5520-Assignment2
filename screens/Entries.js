import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import React from "react";
import CommonStyles from "../styles/CommonStyles";
import Card from "../components/Card";
import Label from "../components/Label";
import Input from "../components/Input";
const Entries = ({ navigation }) => {
  return (
    <View style={CommonStyles.container}>
        <Card customizedStyle={CommonStyles.directionRow}>
          <Label content="Breakfast"/>
          <Input />
        </Card>
    </View>
  );
};

export default Entries;
