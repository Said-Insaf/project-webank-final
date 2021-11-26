// import axios from "axios";
// import {
//   GET_VERIF_LOAD,
//   GET_VERIF_FAIL,
//   GET_VERIF_SUCCESS,
// } from "../actionTypes/verifUsers";
// export const getVerifUsers = (userId) => async (dispatch) => {
//   dispatch({ type: GET_VERIF_LOAD });
//   try {
//     let result = await axios.get(`/api/agent/ajoutCompte/${userId}`);
//     console.log(result);
//     dispatch({ type: GET_VERIF_SUCCESS, payload: result.data });
//   } catch (error) {
//     dispatch({ type: GET_VERIF_FAIL, payload: error.response });
//   }
// };