import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Dimensions,
  TextInput,
  Button,
  Image,
} from "react-native";

import WelcomePage from "./app/screens/WelcomePage";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessageScreen from "./app/screens/MessageScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import { ListItem } from "./app/components/lists";
import Icon from "./app/components/Icon";
import ListingScreen from "./app/screens/ListingScreen";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

/**
 * Temporary Data
 * TODO: Delete later
 */
const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

const Account = () => (
  <Screen>
    <Text>Account Screen</Text>
  </Screen>
);

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweets Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "blue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={StackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

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
  // return <MyAccountScreen />;
  // return <ListingScreen />;
  // return (
  //   <Screen>
  //     <AppPicker
  //       selectedItem={category}
  //       onSelectedItem={(item) => setCategory(item)}
  //       items={categories}
  //       placeholder="Category"
  //       icon="apps"
  //     />
  //     <AppTextInput placeholder="Email" icon="email" />
  //   </Screen>
  // );
  // return <LoginScreen />;
  // return <RegisterScreen />;
  // return <ListingEditScreen />;
  // return (
  //   <Screen>
  //     <ImageInputList
  //       imageUris={imageUris}
  //       onAddImage={handleAdd}
  //       onRemoveImage={handleRemove}
  //     />
  //   </Screen>
  // );
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
