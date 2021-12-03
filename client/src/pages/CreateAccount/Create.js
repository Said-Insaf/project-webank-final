import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { createAccount, editUser } from "../../JS/actions/agent";
const Create = () => {
  const [user, setUser] = useState({});
  const [compte, setCompte] = useState();
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.editAddReducer.edit);
  const userToEdit = useSelector((state) => state.accountReducer.user);
  



  useEffect(() => {
    edit
      ? setUser(userToEdit)
      : setUser({
          firstName: "",
          lastName: "",
          email: "",
          position: "",
          gender: "",
          civilité: "",
          phone: "",
          CIN: "",
          naissance: "",
          ville: "",
          soldeinitial: "",
          RIB: "",
          nature: "",
        });
  }, [userToEdit]);

  const handleCreate = () => {
    edit
      ? dispatch(editUser(userToEdit._id, user))
      : dispatch(createAccount(user));
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/*---- Include the above in your HEAD tag --------*/}
      <div className="container">
        <h1 className="well">Fiche Client</h1>
        <div className="col-lg-12 well">
          <div className="row">
            <form>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>CIN</label>
                  <input
                    type="text"
                    placeholder="CIN..."
                    className="form-control"
                    name="CIN"
                    value={user.CIN}
                    onChange={handleChange}
                  />
                </div>
                <div className="row">
                  <div className="col-sm-6 form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="Enter First Name Here.."
                      className="form-control"
                      name="firstName"
                      value={user.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter Last Name Here.."
                      className="form-control"
                      name="lastName"
                      value={user.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="text"
                    placeholder="Enter Email Address Here.."
                    className="form-control"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="row">
                  <div className="col-sm-6 form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      placeholder="Enter Phone Here.."
                      className="form-control"
                      name="phone"
                      value={user.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <label>Ville</label>
                    <input
                      type="text"
                      placeholder="Enter Adresse Here.."
                      className="form-control"
                      name="ville"
                      value={user.ville}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <label>Naissance</label>
                    <input
                      type="text"
                      placeholder="Enter Naissance Here.."
                      className="form-control"
                      name="naissance"
                      value={user.naissance}
                      onChange={handleChange}
                    />
                  </div>
                  {/* <div
                    className="col-md-12"
                    id="mySelect"
                    onchange="myFunction()"
                  >
                    <select
                      className="form-select mt-3"
                      required
                      onChange={(e) => {
                        setUser({ ...user, position: e.target.value });
                      }}
                    >
                      <option selected disabled value>
                        position
                      </option>
                      <option value="tun">
                        Tunisien résident à l'étranger
                      </option>
                      <option value="sretraité">Senior retraité</option>
                      <option value="salarié">Salarié</option>
                      <option value="jeune">Jeune</option>
                    </select>
                    <div className="valid-feedback">
                      You selected a position!
                    </div>
                    <div className="invalid-feedback">
                      Please select a position!
                    </div> */}
                  {/* </div> */}
                  <div className="col-sm-6 form-group">
                    <label>Civilité</label>
                    <input
                      type="text"
                      placeholder="Enter Civil Status Here.."
                      className="form-control"
                      name="civilité"
                      value={user.civilité}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <label className="mb-3 mr-1" htmlFor="gender">
                    Gender:{" "}
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="gender"
                    id="male"
                    autoComplete="off"
                    required
                    onChange={handleChange}
                  />
                  <label
                    className="btn btn-sm btn-outline-secondary"
                    htmlFor="male"
                  >
                    Mr
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="gender"
                    id="female"
                    autoComplete="off"
                    required
                    onChange={handleChange}
                  />
                  <label
                    className="btn btn-sm btn-outline-secondary"
                    htmlFor="female"
                  >
                    Mme
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="gender"
                    id="secret"
                    autoComplete="off"
                    required
                    onChange={handleChange}
                  />
                  <label
                    className="btn btn-sm btn-outline-secondary"
                    htmlFor="secret"
                  >
                    Mlle
                  </label>
                  <div className="form-group">
                    <label>Position</label>
                    <input
                      type="text"
                      placeholder="Enter Position Here.."
                      className="form-control"
                      name="position"
                      value={user.position}
                      onChange={handleChange}
                    />
                  </div>

                  {edit ? null : (
                    <>
                      <div className="form-group">
                        <label>Numero de compte</label>
                        <input
                          type="text"
                          placeholder="Enter RIB Here.."
                          className="form-control"
                          name="RIB"
                          value={user.RIB}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Nature de compte</label>
                        <input
                          type="text"
                          placeholder="Enter Type account Here.."
                          className="form-control"
                          name="nature"
                          value={user.nature}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Solde initial</label>
                        <input
                          type="text"
                          placeholder="Enter Sold Here.."
                          className="form-control"
                          name="soldeinitial"
                          value={user.soldeinitial}
                          onChange={handleChange}
                        />
                      </div>
                    </>
                  )}
                  <>
                    <Button onClick={handleCreate}>
                      <Link to="/accounts">{edit ? "edit" : "add"}</Link>
                    </Button>
                  </>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Create;
