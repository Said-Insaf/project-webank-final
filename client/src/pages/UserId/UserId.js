// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import SimpleDialog from "../Dialogue/Dialogue.js";
// import { deleteUser, getUser, createAccount } from "../../JS/actions/agent";
// import { toglleEdit, toglleAdd } from "../../JS/actions/editAdd";

// // import deleteBtn from "../../Assets/delete.png";
// const AccountListCard = ({ user }) => {
//   const [Open, setOpen] = useState(false);
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleopen = () => {
//     setOpen(true);
//   };
//   const dispatch = useDispatch();
//   // const handleEdit =() =>{ dispatch(toglleEdit());
//   //   dispatch(getUser(user._id))
//   // }
//   return (
//     <div>
//       <SimpleDialog
//         open={Open}
//         handleClose={handleClose}
//         compte={user.compte}
//       />
//       <link
//         href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
//         rel="stylesheet"
//       />
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="main-box clearfix">
//               <div className="table-responsive">
//                 <table className="table user-list">
//                   <thead>
//                     <tr>
//                       <th>
//                         <span>User</span>
//                       </th>
//                       <th>
//                         <span>RIB</span>
//                       </th>
//                       <th className="text-center">
//                         <span>Profession</span>
//                       </th>
//                       <th>
//                         <span>Email</span>
//                       </th>
//                       <th>&nbsp;</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <Link to="/add">
//                         {" "}
//                         <button
//                           onClick={() => {
//                             dispatch(toglleAdd());
//                             dispatch(createAccount(user));
//                           }}
//                         >
//                           {" "}
//                           ADD
//                           <span className="fa-stack">
//                             <i className="fa fa-square fa-stack-2x" />
//                             <i className="fa fa-pencil fa-stack-1x fa-inverse" />
//                           </span>
//                         </button>
//                       </Link>

//                       <td>
//                         {/* <img
//                              src="https://bootdey.com/img/Content/avatar/avatar1.png"
//                              alt=""
//                            /> */}
//                         <a href="#" className="user-link">
//                           {(user && user.firstName) || ""}
//                           {(user && user.lastName) || ""}
//                         </a>
//                         <span className="user-subhead">Admin</span>
//                       </td>
//                       <td>
//                         <button onClick={handleopen}>Liste des comptes</button>
//                       </td>
//                       <td className="text-center">
//                         <span className="label label-default">Inactive</span>
//                       </td>
//                       <td>
//                         <a href="#"> {(user && user.email) || ""}</a>
//                       </td>

//                       <td style={{ width: "20%" }}>
//                         {/* <a href="#" className="table-link"> </a> */}
//                         <Link to={`/${user._id}`}>
//                           <button
//                             onClick={() => {
//                               dispatch(getUser(user._id));
//                             }}
//                           >
//                             <span className="fa-stack">
//                               <i className="fa fa-square fa-stack-2x" />
//                               <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
//                             </span>
//                           </button>
//                         </Link>
//                         {/* </a> */}

//                         {/* <div className="delete-edit-btns">
//                              <button onClick={() => dispatch(deleteUser(user._id))}> </button> */}

//                         {/* <a href="#" className="table-link"> */}
//                         <Link to="/edit">
//                           {" "}
//                           <button
//                             onClick={() => {
//                               dispatch(toglleEdit(user._id));
//                               dispatch(getUser(user._id));
//                             }}
//                           >
//                             <span className="fa-stack">
//                               <i className="fa fa-square fa-stack-2x" />
//                               <i className="fa fa-pencil fa-stack-1x fa-inverse" />
//                             </span>
//                           </button>
//                         </Link>
//                         <button onClick={() => dispatch(deleteUser(user._id))}>
//                           <span className="fa-stack">
//                             <i className="fa fa-square fa-stack-2x" />
//                             <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
//                           </span>
//                         </button>
//                         {/* <a
//                              href="#"
//                              className="table-link danger"
//                              onClick={() => dispatch(deleteUser(user._id))}
//                            >
//                              <span className="fa-stack">
//                                <i className="fa fa-square fa-stack-2x" />
//                                <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
//                              </span>
//                            </a> */}
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//               {/* <ul className="pagination pull-right">
//                    <li>
//                      <a href="#">
//                        <i className="fa fa-chevron-left" />
//                      </a>
//                    </li>
//                    <li>
//                      <a href="#">1</a>
//                    </li>
//                    <li>
//                      <a href="#">2</a>
//                    </li>
//                    <li>
//                      <a href="#">3</a>
//                    </li>
//                    <li>
//                      <a href="#">4</a>
//                    </li>
//                    <li>
//                      <a href="#">5</a>
//                    </li>
//                    <li>
//                      <a href="#">
//                        <i className="fa fa-chevron-right" />
//                      </a>
//                    </li>
//                  </ul> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountListCard;
