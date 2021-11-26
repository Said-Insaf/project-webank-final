//importation les types
// import {GET_VERIF_FAIL, GET_VERIF_LOAD,GET_VERIF_SUCCESS,} from "../actionTypes/verifUsers"



//initial state 

// const initialState= {
//    verifUsers : {},
//     errors : false,
//     loadVerif :false,
// }


//pure function 
// const verifReducer =()=>(state= initialState, {type, payload})=>{
// switch(type) {
// case GET_VERIF_LOAD : return { ...state, loadVerif: true };
// case GET_VERIF_SUCCESS :return {
//   ...state,
//   verifUsers: payload,
//   loadVerif: false,
// };
// case GET_VERIF_FAIL: return { ...state, loadVerif: false, errors: payload };
// default : return state
// }
// }
// export default verifReducer