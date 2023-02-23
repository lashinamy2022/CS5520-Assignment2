import * as React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entries from "./screens/Entries";
import PressableArea from "./components/PressableArea";
import CommonStyles from "./styles/CommonStyles";
import { Ionicons } from "@expo/vector-icons";
import EditEntry from "./screens/EditEntry";
import AddEntry from "./screens/AddEntry";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        headerStyle: CommonStyles.purpleDark,
        headerTintColor: "#fff",
        headerTitleAlign:"center",
        tabBarStyle: CommonStyles.purpleDark,
        tabBarActiveTintColor: "rgb(235,187,66)",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "all") {
            iconName = "cafe";
          } else if (route.name === "over") {
            iconName = "alert-outline";
          }
          return (
            <Ionicons name={iconName} size={size} color={color}></Ionicons>
          );
        },
        headerRight: () => (
          <PressableArea
            areaPressed={() => {
              navigation.navigate("Add");
            }}
          >
            <Ionicons name="add" size={30} color="#fff" />
          </PressableArea>
        ),
      })}
    >
      <Tab.Screen
        name="all"
        component={Entries}
        options={{ title: "All Entries" }}
      />
      <Tab.Screen
        name="over"
        component={Entries}
        options={{
          title: "Over-limit Entries",
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: CommonStyles.purpleDark,
          headerTintColor: "#fff",
          headerTitleAlign:"center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Edit"
          component={EditEntry}
          options={{ title: "Edit Entry" }}
        />
        <Stack.Screen
          name="Add"
          component={AddEntry}
          options={{ title: "Add An Entry" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
