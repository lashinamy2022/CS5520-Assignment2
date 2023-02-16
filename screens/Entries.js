import { StyleSheet, View, ScrollView, SafeAreaView, Text } from "react-native";
import React from "react";
import CommonStyles from "../styles/CommonStyles";
import Card from "../components/Card";
import Label from "../components/Label";
import Input from "../components/Input";
import { Ionicons } from "@expo/vector-icons";
import PressableArea from "../components/PressableArea";
const Entries = ({ navigation }) => {
  return (
    <SafeAreaView style={CommonStyles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <PressableArea
          areaPressed={() => {
            navigation.navigate("Edit");
          }}
          customizedStyle={styles.pressableAreaCustom}
        >
          <Label content="Breakfast" customizedStyle={{marginLeft: 13}} />
          <View style={[CommonStyles.directionRow]}>
            <Ionicons name="warning" size={25} color="yellow" />
            <Card
              customizedStyle={styles.cardCustom}
            >
              <Label
                content="600"
                customizedStyle={{ color: "black"}}
              />
            </Card>
          </View>
        </PressableArea>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Entries;

const styles = StyleSheet.create({
  pressableAreaCustom: [
    { marginTop: 20, width: 330, height: 50 },
    CommonStyles.purpleDark,
    CommonStyles.commonCardStyle,
    CommonStyles.directionRow,
  ],
  cardCustom:  [
    {
      width: 80,
      height: 30,
      backgroundColor: "#fff",
      marginRight: 13,
    },
    CommonStyles.center,
  ]
});