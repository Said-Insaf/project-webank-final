import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../JS/actions/user";
import UploadImg from "./UploadImage";
import "./SignUp.css";
const SignUp = ({ history }) => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    email: "",
    lastName: "",
    password: "",
    CIN: "",
    gender: "",
    position: "",
    phone: "",
    adresse: "",
  });

  // console.log(newUser);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const [imgUrl1, setImgUrl1] = useState("");
  const [progress1, setProgress1] = useState(0);

  const [imgUrl2, setImgUrl2] = useState("");
  const [progress2, setProgress2] = useState(0);

  const Upload1 = (event) => {
    let file = event.target.files[0];
    UploadImg(file, setImgUrl1, setProgress1);
  };

  const Upload2 = (event) => {
    let file = event.target.files[0];
    UploadImg(file, setImgUrl2, setProgress2);
  };

  useEffect(() => {
    setNewUser({ ...newUser, photo: imgUrl1 });
  }, [imgUrl1]);

  useEffect(() => {
    setNewUser({ ...newUser, photo2: imgUrl2 });
  }, [imgUrl2]);

  // const handleSelect = (e) => {
  //   setNewUser({ ...newUser, [e.target.value]: e.target.value });
  // };
  // handleChange(event) {
  //   this.setState({value: event.target.value});

  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Devenir Client</h3>
              <p>VEUILLEZ RENSEIGNER LES CHAMPS SUIVANTS :</p>
              <form
                className="requires-validation"
                noValidate
                // onSubmit={(e) => {
                //   dispatch(signup(newUser));
                //   e.preventDefault();
                // }}
              >
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    name="firstName"
                    placeholder="firstName"
                    required
                    onChange={handleChange}
                  />
                  <div className="valid-feedback">Username field is valid!</div>
                  <div className="invalid-feedback">
                    Username field cannot be blank!
                  </div>
                </div>
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    name="lastName"
                    placeholder="last Name"
                    required
                    onChange={handleChange}
                  />
                  <div className="valid-feedback">Username field is valid!</div>
                  <div className="invalid-feedback">
                    Username field cannot be blank!
                  </div>
                </div>
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="E-mail Address"
                    required
                    onChange={handleChange}
                  />
                  <div className="valid-feedback">Email field is valid!</div>
                  <div className="invalid-feedback">
                    Email field cannot be blank!
                  </div>
                </div>

                <div
                  className="col-md-12"
                  id="mySelect"
                  onchange="myFunction()"
                >
                  <select
                    className="form-select mt-3"
                    required
                    onChange={(e) => {
                      setNewUser({ ...newUser, position: e.target.value });
                    }}
                  >
                    <option selected disabled value>
                      position
                    </option>
                    <option value="tun">Tunisien résident à l'étranger</option>
                    <option value="sretraité">Senior retraité</option>
                    <option value="salarié">Salarié</option>
                    <option value="jeune">Jeune</option>
                  </select>
                  <div className="valid-feedback">You selected a position!</div>
                  <div className="invalid-feedback">
                    Please select a position!
                  </div>
                </div>

                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="password"
                    name="CIN"
                    placeholder="Carte d'identité nationale"
                    required
                    onChange={handleChange}
                  />
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                    onChange={handleChange}
                  />

                  <input
                    className="form-control"
                    type="text"
                    name="phone"
                    placeholder="phone"
                    required
                    onChange={handleChange}
                  />
                  <input
                    className="form-control"
                    type="email"
                    name="adresse"
                    placeholder="Address"
                    required
                    onChange={handleChange}
                  />
                  <div className="valid-feedback">CIN field is valid!</div>
                  <div className="invalid-feedback">
                    CIN field cannot be blank!
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
                    M
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
                  <div className="valid-feedback mv-up">
                    You selected a gender!
                  </div>
                  <div className="invalid-feedback mv-up">
                    Please select a gender!
                  </div>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="invalidCheck"
                    required
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    I confirm that all data are correct
                  </label>

                  {/* <div className="invalid-feedback">
                    Please confirm that the entered data are all correct!
                  </div> */}
                </div>
                {/* File Button */}
                <div className="form-group">
                  <label
                    className="col-md-4 control-label"
                    htmlFor="filebutton"
                  >
                    Scannez votre CIN (recto) !{" "}
                    {progress1 === 0 ? "" : `uploading : ${progress1} %`}
                  </label>
                  <div>
                    <input
                      name="filebutton"
                      className="input-file"
                      id="filebutton"
                      type="file"
                      onChange={Upload1}
                    />
                  </div>
                </div>
                <br/>

                <div className="form-group">
                  <label
                    className="col-md-4 control-label"
                    htmlFor="filebutton"
                  >
                    Scannez votre CIN (verso) !{" "}
                    {progress2 === 0 ? "" : `uploading : ${progress2} %`}
                  </label>
                  <div>
                    <input
                      name="filebutton"
                      className="input-file"
                      id="filebutton"
                      type="file"
                      onChange={Upload2}
                    />
                  </div>
                </div>

                <div className="form-button mt-3">
                  <button
                    id="submit"
                    type="submit"
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(signup(newUser, history));
                    }}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
