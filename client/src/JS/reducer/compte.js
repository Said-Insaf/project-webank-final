//importation types :
import {
  DEPOT_SUCCESS,
  LOAD_COMPTE,
  FAIL_COMPTE,
  RETRAIT_SUCCESS,
  RECHERCHER_CPT_SUCCESS,
  VERIF_SUCCESS,
  VIREMENT_SUCCESS,
  NEW_COMPTE_SUCCESS,
  GET_SOLDE_SUCCESS,
  GET_HISTO_SUCCESS,
  CLEAR_ALL,
} from "../actionTypes/compte";

//initial state :
const initialState = {
  compte: [],
  cpt: null,
  fin_opt: null,
  user: {},
  errors: null,
  load: false,
  account: null,
  histos: null,
};
//pure function :
const compteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_COMPTE:
      return { ...state, load: true };
    case DEPOT_SUCCESS:
      return { ...state, load: false, cpt: null, fin_opt: payload };
    case RECHERCHER_CPT_SUCCESS:
      return { ...state, load: false, cpt: payload };
    case RETRAIT_SUCCESS:
      return { ...state, load: false, cpt: null, fin_opt: payload };
    case NEW_COMPTE_SUCCESS:
      return { ...state, load: false, compte: payload.cptes };
    case VERIF_SUCCESS:
      return { ...state, load: false, compte: payload };
    case CLEAR_ALL:
      return {
        ...state,
        load: false,
        cpt: null,
        fin_opt: null,
        errors: null,
      };

    case VIREMENT_SUCCESS:
      return { ...state, load: false, cpt: null, fin_opt: payload.data };
    case GET_SOLDE_SUCCESS:
      return { ...state, account: payload, load: false };
    case GET_HISTO_SUCCESS:
      return { ...state, histos: payload, load: false };
    case FAIL_COMPTE:
      return { ...state, errors: payload };
    default:
      return state;
  }
};
export default compteReducer;
