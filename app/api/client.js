import { create } from "apisauce";
import cache from "../utility/cashe";

const apiClient = create({
  baseURL: "http://192.168.1.4:9000/api",
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  // We are at this point if we failed to connect to server
  // So, we try to get data from local storage
  const data = await cache.get(url);

  return data ? { ok: true, data } : response;
};

export default apiClient;
