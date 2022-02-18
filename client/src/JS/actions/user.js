import axios from "axios";
import {
  LOAD_USER,
  LOGOUT_USER,
  SIGNUP_USER,
  FAIL_USER,
  SIGNIN_USER,
  CURRENT_USER,
  CONSULTER_USER,
  HISTO_USER,
} from "../actionTypes/user";

import { RECHERCHER_CPT_SUCCESS } from "../actionTypes/compte";

export const signup = (newUser, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    let result = await axios.post("/api/user/signup", newUser);

    dispatch({ type: SIGNUP_USER, payload: result.data }); //{msg,user,token}
    history.push("/SignIn");
  } catch (error) {
    // error.response.data.errors.map((el) => alert(el.msg));
    dispatch({ type: FAIL_USER, payload: error.response.data }); //{errors:[tableau des errors: name required, mail required etc...]}
  }
};
export const signin = (user, history) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let result = await axios.post("/api/user/signin", user);
    dispatch({ type: SIGNIN_USER, payload: result.data });
    console.log("**********userrrrrrrrr eli 7al taw ******");
    console.log(result.data.user);
    console.log("**********userrrrrrrrr eli 7al taw ******");
    if (result.data.user.role === "user") {
      history.push("/Profile");
    } else if (result.data.user.role === "agent") {
      history.push("/Profile");
    } else if (result.data.user.role === "admin") {
      history.push("/Profile");
    }
  } catch (error) {
    // console.log(error);
    // error.response.data.errors.map((el) =>
    //   setTimeout(function() {
    //     alert(el.msg);
    //   }, 3000)
    // );
    dispatch({ type: FAIL_USER, payload: error.response.data }); //{errors:[tableau des errors: name required, mail required etc...]}
  }
};
export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get("/api/user/current", config);
    dispatch({ type: CURRENT_USER, payload: result.data }); //{user}
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data }); //{errors:[tableau des errors: name required, mail required etc...]}
  }
};
export const logout = () => {
  return { type: LOGOUT_USER };
};
export const consulter = (MyRib) => async (dispatch) => {
  console.log(MyRib);
  console.log(MyRib);
  console.log(MyRib);
  dispatch({ type: LOAD_USER });
  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
        rib: MyRib,
      },
    };

    let result = await axios.get("/api/user/consulter", config);
    dispatch({ type: CONSULTER_USER, payload: result.data });
  } catch (error) {
    dispatch({
      type: FAIL_USER,
      payload: error.response.data,
    }); //{errors:[tableau des errors: name required, mail required etc...]}
  }
};

export const autreCompte = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  dispatch({ type: CONSULTER_USER, payload: null });
};

export const consulterHisto = (MyRib) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
        rib: MyRib,
      },
    };

    let result = await axios.get("/api/user/myHisto", config);
    dispatch({
      type: HISTO_USER /*tetbadel*/,
      payload: result.data.compte.histos,
    });
  } catch (error) {
    dispatch({
      type: FAIL_USER,
      payload: error.response.data,
    }); //{errors:[tableau des errors: name required, mail required etc...]}
  }
};

export const autreCompteHisto = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  dispatch({ type: HISTO_USER /*tetbadel*/, payload: null });
};
