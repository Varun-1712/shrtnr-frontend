export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const LIVE_URL = "http://shrtnr.live/";
export const AUTH_URL = BASE_URL + "auth/";
export const USER_URL = BASE_URL + "user/";
export const URL_URL = BASE_URL + "url/";

export const SIGNUP_URL = AUTH_URL + "signup";
export const LOGIN_URL = AUTH_URL + "login";
export const GOOGLE_LOGIN_URL = AUTH_URL + "google-login";
export const GET_USER_DATA = USER_URL + "getuser";

export const ADD_URL = URL_URL + "add";
export const GET_URL = URL_URL + "get";
export const DELETE_URL = URL_URL + "delete";
export const UPDATE_URL = URL_URL + "update";
export const GET_ALL_URLS = URL_URL + "getall";
