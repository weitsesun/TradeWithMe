import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";

import ListItem from "../components/ListItem";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/wayne.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/wayne.jpeg"),
  },
];

function MessageScreen(props) {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages} // array of list
        keyExtractor={(message) => message.id.toString()} // a function extras special keys from each item in the array
        renderItem={({ item }) => {
          return (
            <ListItem
              image={item.image}
              title={item.title}
              subtitle={item.description}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default MessageScreen;
