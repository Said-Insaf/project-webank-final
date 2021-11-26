// // importation les types
// import {GET_UNVERIF_FAIL, GET_UNVERIF_LOAD,GET_UNVERIF_SUCCESS} from "../actionTypes/unverified"



// // initial state 

// const initialState= {
//     unverifiedUsers : [],
//     errors : null,
//     loadUniverif :false,
//     user:{}
//    }


// // pure function 
// const unverifiedReducer =()=>(state= initialState, {type, payload})=>{
// switch(type) {
// case GET_UNVERIF_LOAD : return { ...state, loadUniverif: true };
// case GET_UNVERIF_SUCCESS : return {
//   ...state,
//   loadUniverif: false,
//   unverifiedUsers: payload.data.UnverifiedUsers,
// };
// case GET_UNVERIF_FAIL: return { ...state, loadUniverif: false, errors: payload };
// default : return state
// }
// }
// export default unverifiedReducer