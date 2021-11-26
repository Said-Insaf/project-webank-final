import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { csltUser, autreCompte } from "../../JS/actions/compte";
const ConsultSldBank = () => {
    // const [user, setUser] = useState({ cin: "", rib: "" });
  const [compte, setCompte] = useState({ cin: "", rib: "" });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setCompte({ ...compte, [e.target.name]: e.target.value });
  };
const account = useSelector((state) => state.compteReducer.account);
 const erreur = useSelector((state) => state.compteReducer.errors);
 const reset = () => {
    setCompte({ cin: "", rib: "" });
    dispatch(csltUser(compte, "supp"));
  };

  return (
    <>
      {account ? (
        <>
          <h1>Solde Du Compte : {account.soldeinitial}</h1>
          <Button onClick={reset}>Consulter Autre Compte</Button>
        </>
      ) : (
        <div>
        
          {/*---- Include the above in your HEAD tag --------*/}
          <div className="container">
            <h1 className="well">Consultation du Solde</h1>
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
                        name="cin"
                        value={compte.cin}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>RIB</label>
                        <input
                          type="text"
                          placeholder="RIB..."
                          className="form-control"
                          name="rib"
                          value={compte.rib}
                          onChange={handleChange}
                        />
                      </div>
                      <Button
                        onClick={() => dispatch(csltUser(compte, "consulter"))}
                      >
                        consulter
                      </Button>
                      <h2>{erreur && erreur.data.msg}</h2>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ConsultSldBank;

