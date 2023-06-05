import axios from "axios";
import {
  ADD_URL,
  DELETE_URL,
  GET_ANAYLTICS,
  GET_URL,
  UPDATE_URL,
} from "../utils/api";

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

export const updateUrl = async (accessToken, url) => {
  try {
    const { data } = await axios.post(UPDATE_URL, url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};

export const deleteUrl = async (accessToken, id) => {
  try {
    const { data } = await axios.post(
      DELETE_URL,
      { id },
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

export const getAnalytics = async (accessToken, id, window) => {
  try {
    const { data } = await axios.get(GET_ANAYLTICS, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        id,
        start: window.start,
        end: window.end,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};
