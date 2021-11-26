//importation type
import {
  GET_ACCOUNTS_SUCCESS,
  GET_ACCOUNTS_LOAD,
  GET_ACCOUNTS_FAIL,
  GET_USER_SUCCESS,
  SIGNUP_AGENT_SUCCESS,
  GET_ALL_AGENT_SUCCESS,
  GET_UNVERIF_SUCCESS,

} from "../actionTypes/agent";
//initial state
const initialState = {
  accountList: [],
  user: {},
  errors: null,
  load: false,
  agent: {},
  agentList: [],
  compte: [],
};
//pure function
const accountReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ACCOUNTS_LOAD:
      return { ...state, load: true };
    case GET_ACCOUNTS_SUCCESS:
      return { ...state, accountList: payload, load: false };
    case GET_USER_SUCCESS:
      return { ...state, load: false, user: payload.data };

    case GET_ACCOUNTS_FAIL:
      return { ...state, load: false, errors: payload };
    case SIGNUP_AGENT_SUCCESS:
      return { ...state, load: false, agent: payload.agent };
    case GET_ALL_AGENT_SUCCESS:
      return { ...state, agentList: payload, load: false };
    case GET_UNVERIF_SUCCESS:
      return { ...state, accountList: payload.UnverifiedUsers, load: false };
    
    default:
      return state;
  }
};
export default accountReducer;
