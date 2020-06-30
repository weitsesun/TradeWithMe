import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Dimensions } from "react-native";
import WelcomePage from "./components/screens/WelcomePage";
import ViewImageScreen from "./components/screens/ViewImageScreen";

export default function App() {
  // return <WelcomePage />;
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
