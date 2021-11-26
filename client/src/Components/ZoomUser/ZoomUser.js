import React ,{useEffect,useState} from 'react'
import {Button} from "react-bootstrap"
import {useDispatch,useSelector} from"react-redux"
import {getUser} from "../../JS/actions/agent"
const ZoomUser = ({match,history}) => {
const dispatch = useDispatch()
const [load,setload] =useState()
const[user,setUser]= useState({firstName:"",lastName:"",email:"",position:""})
const userId = useSelector ((state) => state.accountReducer.user)
useEffect(() => {
dispatch(getUser(match.params.id))
}, [])
useEffect(() => {
setload
  ? setUser(userId)
  : setUser({ firstName: "", lastName: "", email: "", position: "",RIB:"" });
}, [userId])

  return (
    <div>
      <h1>Hello World</h1>
      <h2>{ user.firstName} </h2>
      <h2> {user.lastName}</h2>
      <h2> {user.email}</h2>
      <h2>{ user.position}</h2>
      {/* <h2> {user.RIB}   </h2> */}
      <Button onClick={()=>history.goBack()}>go Back</Button>
    </div>
  );
}

export default ZoomUser

