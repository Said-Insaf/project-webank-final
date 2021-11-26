// importation les types 

import{TOGGLE_ADD,TOGGLE_EDIT} from "../actionTypes/editAdd"


// initialState
const initialState = {
    edit : false,

} 



// pure function 
const editAddReducer = (state =initialState, {type}) =>{
switch (type) {
case TOGGLE_ADD : return {...state, edit:false}
case TOGGLE_EDIT :return {...state, edit: true}

default : return state
}

}
export default editAddReducer