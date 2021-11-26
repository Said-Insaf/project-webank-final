import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import AccountListCard from '../../Components/AccountListCard/AccountListCard';
import { getAccounts } from '../../JS/actions/agent'
import Loading from "../../Components/Loading/Loading"
 const AccountList = () => {
    const dispatch= useDispatch()
   
    const listAccount= useSelector(state => state.accountReducer.accountList)
  // console.log(listAccount)
    // const load=useSelector(state=>state.accountReducer.load)
    const [load,setload] = useState(true)
    useEffect(() => {
           
            dispatch (getAccounts())
            
        }, [dispatch])
     useEffect(() => {
          if (listAccount.listUsers) {setload (false)}
      //  setload(listAccount.listUsers.length==0)   
      console.log(listAccount.listUsers)   
           }, [listAccount])
        return load ? (
          <Loading />
        ) : (
          <div>
            {listAccount.listUsers.map((user) => (
              <AccountListCard user={user} key={user._id} />
            ))}
            
          </div>
         
        )}
 export default AccountList