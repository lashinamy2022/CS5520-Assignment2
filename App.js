import * as React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entries from "./screens/Entries";
import PressableButton from "./components/PressableButton";
import CommonStyles from "./styles/CommonStyles";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: CommonStyles.purpleDark,
        headerTintColor: CommonStyles.fontWhite,
      }}
    >
      <Tab.Screen
        name="All Entries"
        component={Entries}
        options={({ navigation, route }) => ({
          headerRight: () => (
            <PressableButton>
              <Text style={[styles.plusButton, CommonStyles.fontWhite]}>+</Text>
            </PressableButton>
          ),
        })}
      />
      <Tab.Screen name="Over-limit Entries" component={Entries} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  plusButton: {
    fontSize: 30,
    marginRight: 15,
  },
});
