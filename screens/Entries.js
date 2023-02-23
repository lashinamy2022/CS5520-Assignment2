import { StyleSheet, View, ScrollView, SafeAreaView, Text } from "react-native";
import { collection, onSnapshot, where, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import CommonStyles from "../styles/CommonStyles";
import Card from "../components/Card";
import Label from "../components/Label";
import { Ionicons } from "@expo/vector-icons";
import PressableArea from "../components/PressableArea";
import { firestore } from "../firebase/firebase-setup";

const Entries = ({ navigation, route }) => {
  const limit = 500;
  useEffect(() => {
    let q;
    if (route.name === 'all') {
      q = query(collection(firestore, "entries"), orderBy("timestamp", "desc"));
    } else if (route.name === 'over') {
      q = query(collection(firestore, "entries"), where("reviewed", "==", false));
    }
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        if (querySnapshot.empty) {
          setAllEntries([]);
        } else {
          let items = [];
          querySnapshot.forEach((doc) => {
            items.push({ ...doc.data(), id: doc.id });
          });
          setAllEntries(items);
        }
      }
    );
    return function cleanup() {
      unsubscribe();
    };
  }, []);

  const [allEntries, setAllEntries] = useState([]);

  return (
    <SafeAreaView style={CommonStyles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        {allEntries.map((entry) => {
          return (
            <PressableArea
              key={entry.id}
              areaPressed={() => {
                navigation.navigate("Edit", {entry: entry, pageName: route.name});
              }}
              customizedStyle={styles.pressableAreaCustom}
            >
              <Label
                content={entry.desc}
                customizedStyle={{ marginLeft: 13 }}
              />
              <View style={[CommonStyles.directionRow]}>
                {entry.calories > limit && !entry.reviewed && <Ionicons name="warning" size={25} color="yellow" />}
                <Card customizedStyle={styles.cardCustom}>
                  <Label
                    content={entry.calories}
                    customizedStyle={{ color: "black" }}
                  />
                </Card>
              </View>
            </PressableArea>
          );
        })}
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
  cardCustom: [
    {
      width: 80,
      height: 30,
      backgroundColor: "#fff",
      marginRight: 13,
    },
    CommonStyles.center,
  ],
});
