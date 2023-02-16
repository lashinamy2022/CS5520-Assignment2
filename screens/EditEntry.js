import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import Card from "../components/Card";
import CommonStyles from "../styles/CommonStyles";
import Label from "../components/Label";
import PressableArea from "../components/PressableArea";
import { Ionicons } from "@expo/vector-icons";

const EditEntry = () => {
  return (
    <View style={[CommonStyles.container, { alignItems: "center" }]}>
      <Card
        customizedStyle={[
          CommonStyles.purpleLight,
          { marginTop: 50, width: 300, height: 150 },
        ]}
      >
        <View style={[CommonStyles.center, { marginTop: 15 }]}>
          <Label
            content="Calories: 560"
            customizedStyle={{ color: "rgb(60,61,132)", fontSize: 20 }}
          />
          <Label
            content="Description: Breakfast"
            customizedStyle={{ color: "rgb(60,61,132)", fontSize: 20 }}
          />
        </View>

        <View
          style={[
            CommonStyles.directionRow,
            { justifyContent: "space-evenly" },
          ]}
        >
          <PressableArea customizedStyle={styles.pressableAreaCustom}>
            <Ionicons name="trash-outline" size={20} color="#fff"></Ionicons>
          </PressableArea>
          <PressableArea customizedStyle={styles.pressableAreaCustom}>
            <Ionicons name="checkmark" size={20} color="#fff"></Ionicons>
          </PressableArea>
        </View>
      </Card>
    </View>
  );
};

export default EditEntry;

const styles = StyleSheet.create({
  pressableAreaCustom: [
    { marginTop: 20, width: 65, height: 40 },
    CommonStyles.purpleDark,
    CommonStyles.commonCardStyle,
    CommonStyles.center,
  ],
});
