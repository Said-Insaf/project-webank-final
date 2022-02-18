import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { newCptUser } from "../../JS/actions/compte";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const NewCptUsers = ({ match }) => {
  const [compte, setCompte] = useState({
    RIB: "",
    soldeinitial: "",
    nature: "",
  });
  const history = useHistory();
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setCompte({ ...compte, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/*---- Include the above in your HEAD tag --------*/}
      <div className="container">
        <h1 className="well">Ouvrir un compte</h1>
        <div className="col-lg-12 well">
          <div className="row">
            <form>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>RIB</label>
                  <input
                    type="text"
                    placeholder="RIB..."
                    className="form-control"
                    name="RIB"
                    value={compte.RIB}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>Nature</label>
                    <input
                      type="text"
                      placeholder="nature"
                      className="form-control"
                      name="nature"
                      value={compte.nature}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Solde Initiale</label>
                      <input
                        type="text"
                        placeholder="solde initial..."
                        className="form-control"
                        name="soldeinitial"
                        value={compte.soldeinitial}
                        onChange={handleChange}
                      />
                    </div>
                    <Button
                      onClick={() =>
                        dispatch(newCptUser(match.params.id, compte, history))
                      }
                    >
                      Register Compte
                    </Button>
                    {/* <h2>{erreur && erreur.data.msg}</h2> */}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <label>RIB </label>
    //   <input
    //     name="RIB"
    //     placeholder="RIB"
    //     value={compte.RIB}
    //     onChange={handleChange}
    //   />

    //   <label> soldeinitial </label>
    //   <input
    //     name="soldeinitial"
    //     placeholder="soldeinitial"
    //     value={compte.soldeinitial}
    //     onChange={handleChange}
    //   />
    //   <label> nature </label>
    //   <input
    //     name="nature"
    //     placeholder="nature"
    //     value={compte.nature}
    //     onChange={handleChange}
    //   />
    //   <Button
    //     onClick={() => dispatch(newCptUser(match.params.id, compte))}
    //   >
    //     Register Compte
    //   </Button>
    // </div>
  );
};

export default NewCptUsers;
