import axios from "axios";
import { SIGNUP_URL, LOGIN_URL, GOOGLE_LOGIN_URL } from "../utils/api";

export const signupUser = async (userData) => {
  try {
    const { data } = await axios.post(SIGNUP_URL, userData);
    return data;
  } catch (err) {
    throw err;
  }
};

export const loginUser = async (userData) => {
  try {
    const { data } = await axios.post(LOGIN_URL, userData);
    return data;
  } catch (err) {
    throw err;
  }
};

export const googleLoginUser = async (userData) => {
  try {
    const { data } = await axios.post(`${GOOGLE_LOGIN_URL}`, userData);
    return data;
  } catch (err) {
    throw err;
  }
};
