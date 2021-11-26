// import axios from "axios"
// import {
//   GET_UNVERIF_LOAD,
//   GET_UNVERIF_FAIL,
//   GET_UNVERIF_SUCCESS,

// } from "../actionTypes/unverified";

// export const getUnverifiedUsers =(user)=>async(dispatch)=>{
// dispatch({type :GET_UNVERIF_LOAD})
//    try { 
    
//         let result = await axios.get("/api/agent/preverified",user);
//          console.log(result);
//         dispatch({ type: GET_UNVERIF_SUCCESS, payload: result.data });
    
//    } catch (error) {
//        dispatch
//        ({type : GET_UNVERIF_FAIL, payload :error.response})
       
//    }
// }
