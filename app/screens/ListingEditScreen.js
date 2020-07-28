import React, { useState } from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

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
    label: "Furniture",
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
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);

      return alert("Failed to save the new listing.");
    }
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
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
