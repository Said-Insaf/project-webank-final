//combine reducer
import { combineReducers } from "redux";
import userReducer from "./user";

import accountReducer from "./agent";

import editAddReducer from "./editAdd";
import compteReducer from "./compte";
const rootReducer = combineReducers({
  userReducer,
  accountReducer,
 
  editAddReducer,
  compteReducer,
});
export default rootReducer;
