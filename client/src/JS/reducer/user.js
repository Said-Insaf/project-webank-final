// importation les types
const {
  LOAD_USER,
  SIGNIN_USER,
  SIGNUP_USER,
  FAIL_USER,
  LOGOUT_USER,
  CURRENT_USER,
  CONSULTER_USER,
  HISTO_USER,
} = require("../actionTypes/user");
//initial state
const initialState = {
  user: {},
  compteUser: null,
  loadUSer: false,
  errors: [],
  isAuth: false,
  histos:null,
};

//pure function=> (initial state, action :type,payload)
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, loadUser: true };
    case SIGNUP_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, loadUser: false, user: payload.user };
    case SIGNIN_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, loadUser: false, user: payload.user, isAuth: true };
    case CURRENT_USER:
      return { ...state, loadUser: false, user: payload, isAuth: true };
    case FAIL_USER:
      return { ...state, loadUser: false, errors: payload };
    case CONSULTER_USER:
      return {
        ...state,
        loadUser: false,
        compteUser: payload,
        isAuth: true,
      };
      case HISTO_USER:
      return {
        ...state,
        loadUser: false,
        histos: payload,
        isAuth: true,
      };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        user: {},
        loadUSer: false,
        errors: [],
        isAuth: false,
      };
    default:
      return state;
  }
};

//export
export default userReducer;
