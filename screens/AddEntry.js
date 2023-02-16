import { StyleSheet, View, Text } from "react-native";
import React from "react";
import CommonStyles from "../styles/CommonStyles";
import Label from "../components/Label";
import Input from "../components/Input";
import PressableArea from "../components/PressableArea";
const AddEntry = () => {
  return (
    <View style={[CommonStyles.container, { alignItems: "center" }]}>
      <View style={styles.firstRow}>
        <Label
          content="Calories"
          customizedStyle={[
            CommonStyles.fontPurpleDark,
            CommonStyles.fontSizeLarge,
          ]}
        />
        <Input />
      </View>
      <View style={styles.secondRow}>
        <Label
          content="Description"
          customizedStyle={[
            CommonStyles.fontPurpleDark,
            CommonStyles.fontSizeLarge,
          ]}
        />
        <Input customizedStyle={{ height: 120 }} />
      </View>
      <View style={styles.thirdRow}>
        <PressableArea customizedStyle={styles.pressableAreaCustom}>
          <Label
            content="Reset"
            customizedStyle={[{ fontWeight: "normal", fontSize: 15 }]}
          />
        </PressableArea>
        <PressableArea customizedStyle={styles.pressableAreaCustom}>
          <Label
            content="Submit"
            customizedStyle={{ fontWeight: "normal", fontSize: 15 }}
          />
        </PressableArea>
      </View>
    </View>
  );
};

export default AddEntry;

const styles = StyleSheet.create({
  firstRow: [
    CommonStyles.directionRow,
    { marginTop: 80, width: "90%", alignItems: "flex-start" },
  ],
  secondRow: [
    CommonStyles.directionRow,
    { marginTop: 20, width: "90%", alignItems: "flex-start" },
  ],
  thirdRow: [
    CommonStyles.directionRow,
    { marginTop: 20, width: "69%"},
  ],
  pressableAreaCustom: [
    { marginTop: 20, width: 120, height: 40 },
    CommonStyles.purpleDark,
    CommonStyles.commonCardStyle,
    CommonStyles.center,
  ],
});
