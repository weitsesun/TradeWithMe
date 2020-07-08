import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Dimensions } from "react-native";

import WelcomePage from "./app/screens/WelcomePage";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessageScreen from "./app/screens/MessageScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListItem from "./app/components/ListItem";
import Icon from "./app/components/Icon";

export default function App() {
  // return <WelcomePage />;
  // return <ListingDetailScreen />;
  // return (
  //   <Card
  //     title="Blue PS4 Controller in good condition"
  //     subtitle="$100"
  //     image={require("./app/assets/controller.jpg")}
  //   />
  // );
  // return <ViewImageScreen />;
  // return <MessageScreen />;
  return <MyAccountScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
