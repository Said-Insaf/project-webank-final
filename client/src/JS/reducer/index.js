//combine reducer
import { combineReducers } from "redux";
import userReducer from "./user";
import unverifiedReducer from "./unverified";
import accountReducer from "./agent";
import verifReducer from "./verifUsers";
import editAddReducer from "./editAdd";
import compteReducer from "./compte";
const rootReducer = combineReducers({
  userReducer,
  accountReducer,
  unverifiedReducer,
  verifReducer,
  editAddReducer,
  compteReducer,
});
export default rootReducer;
