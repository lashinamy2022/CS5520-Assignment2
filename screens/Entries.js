import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import CommonStyles from "../styles/CommonStyles";
import Card from "../components/Card";
import Label from "../components/Label";
import Input from "../components/Input";
import { Ionicons } from "@expo/vector-icons";
const Entries = ({ navigation }) => {
  return (
    <SafeAreaView style={CommonStyles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Card customizedStyle={[CommonStyles.directionRow, { marginTop: 20 }]}>
          <Label content="Breakfast" />
          <View style={[CommonStyles.directionRow]}>
            <Ionicons name="warning" size={25} color="yellow" />
            <Input readOnly={false} />
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Entries;
