import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import {
  collection,
  onSnapshot,
  where,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import CommonStyles from "../styles/CommonStyles";
import Card from "../components/Card";
import Label from "../components/Label";
import { Ionicons } from "@expo/vector-icons";
import PressableArea from "../components/PressableArea";
import { firestore } from "../firebase/firebase-setup";

const EntriesList = ({ pageName, navigation }) => {
  const limit = 500;
  useEffect(() => {
    let q;
    if (pageName === "all") {
      q = query(collection(firestore, "entries"), orderBy("timestamp", "desc"));
    } else if (pageName === "over") {
      q = query(
        collection(firestore, "entries"),
        where("reviewed", "==", false)
      );
    }
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (querySnapshot.empty) {
        setEntryItems([]);
      } else {
        let items = [];
        querySnapshot.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id });
        });
        setEntryItems(items);
      }
    });
    return function cleanup() {
      unsubscribe();
    };
  }, []);

  const [entryItems, setEntryItems] = useState([]);

  return (
    <FlatList
      contentContainerStyle={{ alignItems: "center" }}
      data={entryItems}
      renderItem={({ item }) => {
        return (
          <PressableArea
            key={item.id}
            areaPressed={() => {
              navigation.navigate("Edit", { entry: item, pageName: pageName });
            }}
            customizedStyle={styles.pressableAreaCustom}
          >
            <Label content={item.desc} customizedStyle={{ marginLeft: 13 }} />
            <View style={[CommonStyles.directionRow]}>
              {item.calories > limit && !item.reviewed && (
                <Ionicons name="warning" size={25} color="yellow" />
              )}
              <Card customizedStyle={styles.cardCustom}>
                <Label
                  content={item.calories}
                  customizedStyle={{ color: "black" }}
                />
              </Card>
            </View>
          </PressableArea>
        );
      }}
    />
  );
};

export default EntriesList;
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
