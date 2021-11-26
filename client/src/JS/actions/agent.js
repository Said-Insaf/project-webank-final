import axios from "axios";

import {
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_LOAD,
  GET_ACCOUNTS_FAIL,
  GET_USER_SUCCESS,
  SIGNUP_AGENT_SUCCESS,
  GET_ALL_AGENT_SUCCESS,
  GET_UNVERIF_SUCCESS,

} from "../actionTypes/agent";

export const getAccounts = () => async (dispatch) => {
  dispatch({ type: GET_ACCOUNTS_LOAD });
  try {
    let result = await axios.get("/api/agent/accounts");
    dispatch({ type: GET_ACCOUNTS_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: GET_ACCOUNTS_FAIL,
      payload: error.response,
    });
  }
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/agent/${id}`);
    dispatch(getAccounts());
  } catch (error) {
    console.log(error);
  }
};
export const getUser=(userid) => async (dispatch)=>{
  
try {
 let result = await axios.get(`/api/agent/${userid}`);
  dispatch({type:GET_USER_SUCCESS , payload: result.data})
} catch (error) {
  console.log(error)
}


}
export const editUser=(id,newUser) =>async(dispatch)=>{

try {
 await axios.put(`/api/agent/${id}`, newUser);
dispatch(getAccounts())
console.log(editUser)
} catch (error) { dispatch({
  type: GET_ACCOUNTS_FAIL,
  payload: error.response,
});
 
}

}

export const createAccount=(newUser)=>async(dispatch)=>{
  try {
  await axios.post("/api/compte/add",newUser)
    dispatch(getAccounts())
  } catch (error) {
    console.log(error);
  }
}
export const signupAgent=(newAgent,history)=>async(dispatch)=>{
try {
 let result= await axios.post("/api/agent/newBankAgent",newAgent)
  dispatch({type:SIGNUP_AGENT_SUCCESS, payload:result.data})
  history.push("/allAgents")

} catch (error) {
  console.log(error)
}

}
export const getAllAgent=()=>async(dispatch)=>{
try {
  let result= await axios.get("/api/agent/allAgents")
  dispatch({ type: GET_ALL_AGENT_SUCCESS,payload:result.data });
} catch (error) {
  console.log(error)
}

}
export const getUnverifiedUsers =()=>async(dispatch)=>{
dispatch({ type: GET_ACCOUNTS_LOAD });
   try { 
    
        let result = await axios.get("/api/agent/preverified");
         console.log(result);
        dispatch({ type: GET_UNVERIF_SUCCESS, payload: result.data });
    
   } catch (error) {
       dispatch({ type: GET_ACCOUNTS_FAIL, payload: error.response });
       
   }
}
