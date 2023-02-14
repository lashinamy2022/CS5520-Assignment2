import * as React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entries from "./screens/Entries";
import PressableButton from "./components/PressableButton"; 

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: styles.purpleDark,
        headerTintColor: "#fff",
      }}
    >
      <Tab.Screen name="All Entries" component={Entries} 
      options={({navigation, route}) => ({
        headerRight:()=>(
          <PressableButton>
            <Text style={styles.plusButton}>+</Text>
          </PressableButton>
        )
      })}/>
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
  purpleDark: {
    backgroundColor: "rgb(60,61,132)",
  },
  purpleMedium: {
    backgroundColor: "rgb(127,123,189)",
  },
  purpleLight: {
    backgroundColor: "rgb(154,150,221)",
  },
  plusButton: {
    fontSize:30, 
    color: '#fff', 
    marginRight: 15
  }
});
