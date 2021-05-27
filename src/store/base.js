import { createAction, handleActions } from "redux-actions";
import axios from "axios";
import {API_URL} from "../const/URL";
const LOGIN = "base/LOGIN";
const LOGOUT = "base/LOGOUT";
const SET_USER_INFO = "base/SET_USER_INFO";
const GET_USER_INFO = "base/GET_USER_INFO";


export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);
export const setUserInfo = createAction(SET_USER_INFO);



const initialState = {
  userInfo: {
    email:"",
    photo:'',
    fullName:"",
    token: "",
    charge: 0,
  },
};

export default handleActions(
  {
    [LOGIN]: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        userInfo: action.payload,
      };
    },
    [LOGOUT]: (state, action) => {
      localStorage.removeItem("token");
      window.location.href = "/";
      return {
        userInfo: {},
      };
    },
    [SET_USER_INFO]: (state, action) => {
      return {
        ...state,
        userInfo: action.payload,
      };
    },
  },
  initialState
);
