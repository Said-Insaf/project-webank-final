import axios from "axios";
import {
  DEPOT_SUCCESS,
  LOAD_COMPTE,
  RETRAIT_SUCCESS,
  FAIL_COMPTE,
  RECHERCHER_CPT_SUCCESS,
  VERIF_SUCCESS,
  VIREMENT_SUCCESS,
  NEW_COMPTE_SUCCESS,
  GET_SOLDE_SUCCESS,
  GET_HISTO_SUCCESS,
} from "../actionTypes/compte";

export const rechercheCpt = (rib) => async (dispatch) => {
  dispatch({ type: LOAD_COMPTE });
  try {
    let result = await axios.post("/api/compte/find", { RIB: rib });
    dispatch({ type: RECHERCHER_CPT_SUCCESS, payload: result.data.cpt });
  } catch (error) {
    alert(error.response.data.msg);
    dispatch({
      type: FAIL_COMPTE,
      payload: error.response,
    });
  }
};

export const depotUser = (compte) => async (dispatch) => {
  dispatch({ type: LOAD_COMPTE });
  try {
    let result = await axios.put("/api/compte/depot", { ...compte });
    console.log("************ depot ************");
    console.log(result);
    console.log("************ depot ************");
    dispatch({ type: DEPOT_SUCCESS, payload: result.data.data });
  } catch (error) {
    dispatch({
      type: FAIL_COMPTE,
      payload: error.response,
    });
  }
};
export const retraitUser = (compte) => async (dispatch) => {
  dispatch({ type: LOAD_COMPTE });
  try {
    let result = await axios.put("/api/compte/retrait", { ...compte });
    console.log(result);
    dispatch({ type: RETRAIT_SUCCESS, payload: result.data.data });
  } catch (error) {
    alert(error.response.data.msg);
    dispatch({
      type: FAIL_COMPTE,
      payload: error.response,
    });
  }
};
export const verifUsers = (id, newCompte, forward) => async (dispatch) => {
  dispatch({ type: LOAD_COMPTE });
  try {
    console.log(newCompte);
    let result = await axios.put(`/api/agent/ajoutCompte/${id}`, {
      ...newCompte,
    });
    console.log("*************************");
    console.log(result);
    console.log("*************************");
    dispatch({ type: VERIF_SUCCESS, payload: result.data.data });
    forward();
  } catch (error) {
    dispatch({
      type: FAIL_COMPTE,
      payload: error.response,
    });
  }
};
export const virementUsers = (compte, reset) => async (dispatch) => {
  dispatch({ type: LOAD_COMPTE });
  try {
    let result = await axios.put("/api/compte/virements", { ...compte });
    dispatch({ type: VIREMENT_SUCCESS, payload: result.data });
    reset();
  } catch (error) {
    dispatch({ type: FAIL_COMPTE, payload: error.response });
  }
};
export const newCptUser = (id, newCompte) => async (dispatch) => {
  dispatch({ type: LOAD_COMPTE });
  try {
    console.log(newCompte);
    let result = await axios.put(`/api/agent/newCompte/${id}`, {
      ...newCompte,
    });
    console.log("*************************");
    console.log(result);
    console.log("*************************");
    dispatch({ type: NEW_COMPTE_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: FAIL_COMPTE,
      payload: error.response,
    });
  }
};
export const csltUser = (account, type) => async (dispatch) => {
  if (type === "supp") {
    dispatch({ type: GET_SOLDE_SUCCESS, payload: null });
  } else {
    dispatch({ type: LOAD_COMPTE });
    try {
      console.log(account);
      let result = await axios.get("/api/agent/csltUser", {
        headers: { ...account },
      });
      console.log("************hello*************");
      console.log(result);
      console.log("*************************");
      dispatch({ type: GET_SOLDE_SUCCESS, payload: result.data.compte });
    } catch (error) {
      console.log(error.response);
      dispatch({ type: FAIL_COMPTE, payload: error.response });
      console.log(error);
    }
  }
};

export const histoUser = (account, type) => async (dispatch) => {
  if (type === "supp") {
    dispatch({ type: GET_HISTO_SUCCESS, payload: null });
  } else {
    dispatch({ type: LOAD_COMPTE });
    try {
      console.log(account);
      let result = await axios.get("/api/agent/histoUser", {
        headers: { ...account },
      });
      console.log("************hello*************");
      console.log(result);
      console.log("*************************");
      dispatch({ type: GET_HISTO_SUCCESS, payload: result.data.compte.histos });
    } catch (error) {
      console.log(error.response);
      dispatch({ type: FAIL_COMPTE, payload: error.response });
      console.log(error);
    }
  }
};
