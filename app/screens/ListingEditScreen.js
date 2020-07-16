import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";
import * as Location from "expo-location";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

/**
 * Temporary Data
 * TODO: Delete later
 */
const categories = [
  {
    label: "Furnitasdfadfadfasdfasdfure",
    value: 1,
    backgroundColor: "red",
    icon: "apple",
  },
  {
    label: "Clothing",
    value: 2,
    backgroundColor: "dodgerblue",
    icon: "account",
  },
  {
    label: "Cameras",
    value: 3,
    backgroundColor: "orange",
    icon: "alpha-k-circle",
  },
  {
    label: "Cameras",
    value: 4,
    backgroundColor: "orange",
    icon: "alpha-k-circle",
  },
  {
    label: "Cameras",
    value: 5,
    backgroundColor: "orange",
    icon: "alpha-k-circle",
  },
];

function ListingEditScreen() {
  const [location, setLocation] = useState();
  const getLocation = async () => {
    const { granted } = await Location.requestPermissionsAsync();
    if (!granted) return;
    const {
      coords: { latitude, longitude },
    } = await Location.getLastKnownPositionAsync();
    setLocation({ latitude, longitude });
  };

  useEffect(() => {
    getLocation();
  }, []);
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(value) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField
          placeholder="Title"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={255}
          name="title"
        />
        <AppFormField
          placeholder="Price"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          name="price"
          width={120}
        />
        <AppFormPicker
          placeholder="Category"
          items={categories}
          name="category"
          width="50%"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
        />
        <AppFormField
          placeholder="Description"
          autoCapitalize="none"
          autoCorrect={false}
          name="description"
          multiline
          numberOfLines={3}
          maxLength={255}
        />

        <SubmitButton title="POST" color="secondary" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
