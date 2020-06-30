import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Dimensions } from "react-native";
import WelcomePage from "./app/screens/WelcomePage";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return <WelcomePage />;
  // return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
