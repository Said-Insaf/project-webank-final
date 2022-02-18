import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUnverifiedUsers } from "../../JS/actions/agent";
import PreverifCard from "../../Components/PreverifCard/PreverifCard";
import Loading from "../../Components/Loading/Loading";
const PreverifUsers = () => {
  const dispatch = useDispatch();
  const listUnverifiedUsers = useSelector(
    (state) => state.accountReducer.accountList
  );
  console.log(listUnverifiedUsers);
  const load = useSelector((state) => state.accountReducer.load);
  useEffect(() => {
    dispatch(getUnverifiedUsers());
  }, []);
  return (
    <div>
      {!listUnverifiedUsers ? (
        <Loading />
      ) : (
        <div>
          <h5 className="card-title text-uppercase mb-0">
            <span className="white_text">Clients pré-enregistrés</span>
          </h5>
          {listUnverifiedUsers.map((el) => {
            return <PreverifCard user={el} key={el._id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default PreverifUsers;

// import React, { useEffect,useState } from "react";
// import { useDispatch,useSelector} from "react-redux";
// import PreverifCard from "../../Components/PreverifCard/PreverifCard";
// import Loading from "../../Components/Loading/Loading"
// import { getUnverifiedUsers } from "../../JS/actions/unverified";
// const UnverifiedUsers = ({ UnverifiedUsers }) => {
//   const [load, setload] = useState(true);
//   const dispatch = useDispatch();
//   const listUnverifiedUser = useSelector(
//     (state) => state.unverifiedReducer.unverifiedUsers
//   );

//   useEffect(() => {
//     dispatch(getUnverifiedUsers());
//   }, [dispatch]);
//   useEffect(() => {
//     if (listUnverifiedUser) {
//       setload(false);
//     }
//     console.log(listUnverifiedUser);
//   }, [listUnverifiedUser]);

//   return load ? (
//     <Loading />
//   ) : (
//     <div>
//       {listUnverifiedUser.map((user) => (
//         <PreverifCard user={user} key={user._id} />
//       ))}
//     </div>
//   );
// };

// export default UnverifiedUsers;

//  {
//    listUnverifiedUser.UnverifiedUsers.map((user) => (
//      <PreverifCard user={user} key={user._id} />
//    ));
//  }

// const [load,setload] = useState(true)
//     useEffect(() => {

//             dispatch (getAccounts())

//         }, [dispatch])
//      useEffect(() => {
//           if (listAccount.listUsers) {setload (false)}
//       //  setload(listAccount.listUsers.length==0)
//       console.log(listAccount.listUsers)
//            }, [listAccount])
//         return load ? (
//           <Loading />
//         ) : (
//           <div>
//             {listAccount.listUsers.map((user) => (
//               <AccountListCard user={user} key={user._id} />
//             ))}
//           </div>
//         );}
