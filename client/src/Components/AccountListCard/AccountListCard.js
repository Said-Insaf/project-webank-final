import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SimpleDialog from "../Dialogue/Dialogue.js";
import { deleteUser, getUser } from "../../JS/actions/agent";
import { toggleEdit, toggleAdd } from "../../JS/actions/editAdd";
import "./AccountListCard.css";
// import deleteBtn from "../../Assets/delete.png";
const AccountListCard = ({ newUser, user }) => {
  const dispatch = useDispatch();
  const [Open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleopen = () => {
    setOpen(true);
  };
  const userNow = useSelector((state) => state.userReducer.user);
  // const handleEdit=()=>{dispatch(toggleEdit(user._id))
  //   dispatch(getUser(user._id))}

  // const handleEdit =() =>{ dispatch(toglleEdit());
  //   dispatch(getUser(user._id))
  // }
  const handleEdit = () => {
    dispatch(toggleEdit());
    dispatch(getUser(user._id));
  };
  return (
    <>
      <SimpleDialog
        open={Open}
        handleClose={handleClose}
        compte={user.compte}
      />
      <tr>
        {/* <Link to="/add">
                        <button
                          onClick={() => dispatch(toggleAdd())}
                          // onClick={()=>dispatch(toggleAdd(newUser))}
                        >
                          {" "}
                          ADD
                          <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x" />
                            <i className="fa fa-pencil fa-stack-1x fa-inverse" />
                          </span>
                        </button>
                      </Link> */}

        <td>
          {/* <img
                             src="https://bootdey.com/img/Content/avatar/avatar1.png"
                             alt=""
                           /> */}
          {/* <a href="#" className="user-link"> */}
          {(user && user.firstName) || ""}
          {(user && user.lastName) || ""}
          {/* </a> */}
          <span className="user-subhead"> </span>
        </td>
        <td>
          <button onClick={handleopen}>Liste des comptes</button>
        </td>
        <td className="text-center">
          <span className="label label-default">
            {(user && user.position) || ""}
          </span>
        </td>
        <td>
          <a href="#"> {(user && user.email) || ""}</a>
        </td>
        <td style={{ width: "20%" }}>
          {/* <a href="#" className="table-link"> */}
          <Link to={`/ZoomUser/${user._id}`}>
            <button
              onClick={() => {
                dispatch(getUser(user._id));
              }}
            >
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <i className="fa fa-search-plus fa-stack-1x fa-inverse" />
              </span>
            </button>
          </Link>
          {/* </a> */}

          {/* <div className="delete-edit-btns">
                             <button onClick={() => dispatch(deleteUser(user._id))}> </button> */}

          {/* <a href="#" className="table-link"> */}
          <Link to="/edit">
            <button onClick={handleEdit}>
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <i className="fa fa-pencil fa-stack-1x fa-inverse" />
              </span>
            </button>
          </Link>
          <Link to={`/newCompte/${user._id}`}>
            <button>
              <span className="fa-stack">
                <i className="fa fa-stack-2x fa-key" />
                {/* <i className="fa fa-trash-o fa-stack-1x fa-inverse" /> */}
                {/* <i className="fa fa-key" /> */}
              </span>
            </button>
          </Link>
          {userNow.role === "admin" ? (
            <button onClick={() => dispatch(deleteUser(user._id))}>
              <span className="fa-stack">
                <i className="fa fa-square fa-stack-2x" />
                <i className="fa fa-trash-o fa-stack-1x fa-inverse" />
              </span>
            </button>
          ) : (
            <> </>
          )}
        </td>
      </tr>
    </>
  );
};

export default AccountListCard;
