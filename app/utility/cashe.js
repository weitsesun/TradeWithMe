import AsyncStorage from "@react-native-community/async-storage";
import moment from "moment";

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) => {
  let now = moment(Date.now());
  let storeTime = moment(item.timestamp);

  return now.diff(storeTime, "minutes") > expiryInMinutes;
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      // Invalid Command Query Separation (CQS) principle here, but it's ok
      // Where invalid? A GET query should not change anything in the database
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
};
