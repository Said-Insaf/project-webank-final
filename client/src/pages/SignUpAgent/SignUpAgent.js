import React , {useState} from 'react'
import {useDispatch} from "react-redux"
import { signupAgent } from '../../JS/actions/agent';
const SignUpAgent = ({history}) => {
const [newAgent, setNewAgent] = useState({
  firstName: "",
  email: "",
  lastName: "",
  password: "",
  CIN: "",
  gender: "",
  position: "",
  phone: "",
});
const dispatch = useDispatch()
const handleChange=(e)=>{
  setNewAgent({...newAgent,[e.target.name]: e.target.value})
}

  return (
    <div>
      
      {/*---- Include the above in your HEAD tag --------*/}
      <div className="container">
        <h1 className="well">Fiche métier Agent administratif</h1>
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
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <label>Password</label>
                    <input
                      type="text"
                      placeholder="Enter Password Here.."
                      className="form-control"
                      name="password"
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
                    <select
                      className="form-control"
                      required
                      name="position"
                      onChange={(e) => {
                        setNewAgent({ ...newAgent, position: e.target.value });
                      }}
                    >
                      <label>Position Type</label>
                      <option value="Guichetier">Guichetier</option>
                      <option value="Conseiller d’accueil">
                        Conseiller d’accueil
                      </option>
                      <option value="Chargé de clientèle">
                        Chargé de clientèle Particuliers et Entreprises
                      </option>
                      <option value="Caissier">Caissier</option>
                      <option value="Chef d'agence">Chef d'agence</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    className="btn btn-lg btn-info"
                    onClick={() => dispatch(signupAgent(newAgent, history))}
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUpAgent
