//import create store
import { createStore, applyMiddleware, compose } from "redux";
//import rootReducer
import rootReducer from "../reducer";
import  thunk  from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//store
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

//export
export default store;
