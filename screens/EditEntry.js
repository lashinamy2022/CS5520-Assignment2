import { StyleSheet, View, Text, Pressable, Alert } from "react-native";
import React from "react";
import Card from "../components/Card";
import CommonStyles from "../styles/CommonStyles";
import Label from "../components/Label";
import PressableArea from "../components/PressableArea";
import { Ionicons } from "@expo/vector-icons";
import { deleteDocById, updateDocById} from "../firebase/firebase-helper";
const EditEntry = ({ navigation, route }) => {
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
            content={"Calories: " + route.params.entry.calories}
            customizedStyle={[
              CommonStyles.fontSizeLarge,
              CommonStyles.fontPurpleDark,
            ]}
          />
          <Label
            content={"Description: " + route.params.entry.desc}
            customizedStyle={{ color: "rgb(60,61,132)", fontSize: 20 }}
          />
        </View>

        <View
          style={[
            CommonStyles.directionRow,
            { justifyContent: "space-evenly" },
          ]}
        >
          <PressableArea
            customizedStyle={styles.pressableAreaCustom}
            areaPressed={() => {
              Alert.alert("Delete", "Are you sure you want to delete this?", [
                { text: "NO", onPress: () => console.log("No Pressed") },
                {
                  text: "YES",
                  onPress: () => {
                    deleteDocById(route.params.entry.id);
                    navigation.navigate(route.params.pageName);
                  },
                },
              ]);
            }}
          >
            <Ionicons name="trash-outline" size={20} color="#fff"></Ionicons>
          </PressableArea>

          {route.params.entry.calories > 500 && !route.params.entry.reviewed && (
            <PressableArea customizedStyle={styles.pressableAreaCustom}
            areaPressed={()=>{
              Alert.alert("Important", "Are you sure you want to mark this item as reviewed?", [
                { text: "NO", onPress: () => console.log("No Pressed") },
                {
                  text: "YES",
                  onPress: () => {
                    updateDocById(route.params.entry.id, {reviewed: true});
                    navigation.navigate(route.params.pageName);
                  },
                },
              ]);
            }}>
              <Ionicons name="checkmark" size={20} color="#fff"></Ionicons>
            </PressableArea>
          )}
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
