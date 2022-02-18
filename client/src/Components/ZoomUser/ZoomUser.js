import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../../JS/actions/agent";
const ZoomUser = ({ match, history }) => {
  const dispatch = useDispatch();
  const [load, setload] = useState();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    position: "",
  });
  const userId = useSelector((state) => state.accountReducer.user);
  useEffect(() => {
    dispatch(getUser(match.params.id));
  }, []);
  useEffect(() => {
    setload
      ? setUser(userId)
      : setUser({
          firstName: "",
          lastName: "",
          email: "",
          position: "",
          RIB: "",
        });
  }, [userId]);
  return (
    <div className="container profile_info">
      <div className="main-body partGroup">
        {/* /Breadcrumb */}
        <div className="part1 row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://previews.123rf.com/images/faysalfarhan/faysalfarhan1605/faysalfarhan160504748/57292284-client-membre-ic%C3%B4ne-cyan-brillant-bouton-rond-bleu.jpg"
                    alt="Client"
                    className="rounded-circle"
                    width={80}
                  />
                  <div className="my-3 profile_info">
                    <h4>{(user && user.firstName) || ""}</h4>
                    <h4> {(user && user.lastName) || ""}</h4>
                    <p className="text-secondary mb-1">Profession</p>
                    <p className="text-muted font-size-sm">
                      {(user && user.position) || ""}
                    </p>
                    <Link to="/consulter">
                      <button className="btn btn-outline-primary">
                        Contacter par E-mail
                      </button>
                    </Link>
                    <Button onClick={() => history.goBack()}>go Back</Button>
                    {/* <Link to="/myhistorique">
                      <button className="btn btn-primary">
                        Consulter votre historique
                      </button>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="part2 col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {(user && user.firstName) || ""}
                  <br />
                  {(user && user.lastName) || ""}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {(user && user.email) || ""}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">CIN</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {(user && user.CIN) || ""}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Position</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {(user && user.position) || ""}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {(user && user.phone) || ""}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Adresse</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {(user && user.adresse) || ""}
                </div>
              </div>
              <hr />

              {/* <div className="row">
                     <div className="col-sm-12">
                       <a
                         className="btn btn-info "
                         target="__blank"
                         href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                       >
                         Edit
                       </a>
                     </div>
                   </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//   return (
//     <div>
//       <h1>Hello World</h1>
//       <h2>{ user.firstName} </h2>
//       <h2> {user.lastName}</h2>
//       <h2> {user.email}</h2>
//       <h2>{ user.position}</h2>
//       {/* <h2> {user.RIB}   </h2> */}
//       <Button onClick={()=>history.goBack()}>go Back</Button>
//     </div>
//   );
// }

export default ZoomUser;
