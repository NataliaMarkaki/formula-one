import { API_URL } from "./constants";

export const getDrivers = async season => {
  let result;
  try {
    result = await fetch(`${API_URL}/${season}/drivers.json`);
  } catch (e) {
    console.error("Error while fetching getDrivers: ", e);
    return [];
  }

  if (!result.ok) {
    console.error("Wrong response from getDrivers");
    return [];
  }

  return result.json();
};
