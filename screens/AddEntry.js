import { StyleSheet, View, Text, Alert } from "react-native";
import { useState } from "react";
import CommonStyles from "../styles/CommonStyles";
import Label from "../components/Label";
import Input from "../components/Input";
import PressableArea from "../components/PressableArea";
import { writeToDB } from "../firebase/firebase-helper";
import { serverTimestamp } from "firebase/firestore";


const AddEntry = ({navigation}) => {
  const [calories, setCalories] = useState("");
  const [desc, setDesc] = useState("");
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
        <Input
          value={calories}
          setEnteredValue={(calories) => {
            setCalories(calories);
          }}
          isMultiline={false}
        />
      </View>
      <View style={styles.secondRow}>
        <Label
          content="Description"
          customizedStyle={[
            CommonStyles.fontPurpleDark,
            CommonStyles.fontSizeLarge,
          ]}
        />
        <Input
          customizedStyle={{ height: 120 }}
          value={desc}
          setEnteredValue={(desc) => {
            setDesc(desc);
          }}
          isMultiline={true}
        />
      </View>
      <View style={styles.thirdRow}>
        <PressableArea
          customizedStyle={styles.pressableAreaCustom}
          areaPressed={() => {
            setCalories("");
            setDesc("");
          }}
        >
          <Label
            content="Reset"
            customizedStyle={[{ fontWeight: "normal", fontSize: 15 }]}
          />
        </PressableArea>
        <PressableArea
          customizedStyle={styles.pressableAreaCustom}
          areaPressed={() => {
            //validate
            let numReg = /^\+?[1-9][0-9]*$/;
            if (
              !numReg.test(calories) ||
              desc.length === 0 ||
              desc.length > 10
            ) {
              Alert.alert("Invalid input", "Please check your input values", [
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ]);
              return;
            }
            let data = { calories: parseInt(calories), desc: desc.trim(), timestamp: serverTimestamp() };
            if (parseInt(calories) > 500) {
              data = {...data, reviewed: false};
            }
            writeToDB(data);
            navigation.navigate("Home");
          }}
        >
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
  thirdRow: [CommonStyles.directionRow, { marginTop: 20, width: "69%" }],
  pressableAreaCustom: [
    { marginTop: 20, width: 120, height: 40 },
    CommonStyles.purpleDark,
    CommonStyles.commonCardStyle,
    CommonStyles.center,
  ],
});
