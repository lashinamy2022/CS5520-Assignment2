import { StyleSheet, SafeAreaView } from "react-native";
import CommonStyles from "../styles/CommonStyles";
import EntriesList from "../components/EntriesList";

const Entries = ({ navigation, route }) => {
  return (
    <SafeAreaView style={CommonStyles.container}>
      
      <EntriesList pageName = {route.name} navigation={navigation}/>

    </SafeAreaView>
  );
};

export default Entries;
