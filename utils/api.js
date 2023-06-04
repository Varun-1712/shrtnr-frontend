export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const AUTH_URL = BASE_URL + "auth/";
export const USER_URL = BASE_URL + "user/";

export const SIGNUP_URL = AUTH_URL + "signup";
export const LOGIN_URL = AUTH_URL + "login";
export const GOOGLE_LOGIN_URL = AUTH_URL + "google-login";
export const GET_USER_DATA = USER_URL + "getuser";
