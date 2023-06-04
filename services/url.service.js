import axios from "axios";
import { ADD_URL, GET_URL } from "../utils/api";

export const addUrl = async (accessToken, url) => {
  try {
    const { data } = await axios.post(
      ADD_URL,
      {
        url,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data;
  } catch (err) {
    throw err;
  }
};

export const getUrl = async (accessToken, id) => {
  try {
    const { data } = await axios.get(GET_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        id,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};
