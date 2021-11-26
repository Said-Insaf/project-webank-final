import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { rechercheCpt } from "../../JS/actions/compte";
import { virementUsers } from "../../JS/actions/compte";
const Virement = () => {
  const [compte, setCompte] = useState({ RIB1: "", RIB2: "", montant: 0 });
  const dispatch = useDispatch();
  const cptuser = useSelector((state) => state.compteReducer.cpt);
  const fin_opt = useSelector((state) => state.compteReducer.fin_opt);
  const handleChange = (e) => {
    setCompte({ ...compte, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setCompte({ RIB1: "", RIB2: "", montant: 0 });
  };
  return (
    <div>
      {cptuser !== null ? (
        <div className="col-lg-12 well">
          <div className="row">
            <form>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>Numero de compte de l'emetteur</label>
                  <input
                    name="RIB1"
                    className="form-control"
                    placeholder="RIB1"
                    value={compte.RIB1}
                    disabled
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Solde de compte</label>
                  <input
                    name="soldeinitial"
                    className="form-control"
                    placeholder="Solde de compte RIB1"
                    disabled
                    value={cptuser.soldeinitial}
                  />
                </div>
                <div className="form-group">
                  <label>Numero de compte destinateur</label>
                  <input
                    name="RIB2"
                    className="form-control"
                    placeholder="RIB2"
                    value={compte.RIB2}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Montant à virer</label>
                  <input
                    name="montant"
                    className="form-control"
                    placeholder="Montant à virer"
                    value={compte.montant}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  onClick={() => {
                    dispatch(virementUsers(compte, reset));
                  }}
                >
                  {" "}
                  Effectuer{" "}
                </Button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <>
          <div>
            <div className="container">
              <h1 className="well">Virement Bancaire</h1>
              <div className="col-lg-12 well">
                <div className="row">
                  <form>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Numero de compte de l'emetteur : </label>
                        <input
                          name="RIB1"
                          className="form-control"
                          placeholder="RIB1"
                          value={compte.RIB1}
                          onChange={handleChange}
                        />
                      </div>
                      <Button
                        onClick={() => dispatch(rechercheCpt(compte.RIB1))}
                      >
                        {" "}
                        chercher{" "}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div>
            {fin_opt !== null ? (
              <>
                <h3>
                  Cher client, votre virement a été bien effectuée du Numero de
                  compte de l'emetteur {fin_opt.c1.RIB} vers le Numero de compte
                de destinateur {fin_opt.c2.RIB}{" "}
                </h3>

                <h3>
                  compte initiale {fin_opt.c1.RIB} 
                  solde initiale
                  {Number(fin_opt.c1.soldeinitial) + Number(fin_opt.montant)}
                </h3>

                <h3>
                  Compte final {fin_opt.c2.RIB} Solde initiale
                  {fin_opt.c2.soldeinitial - fin_opt.montant}
                </h3>

                <hr />

                <h3>
                  Compte initiale {fin_opt.c1.RIB} Solde finale
                  {fin_opt.c1.soldeinitial}
                </h3>

                <h3>
                  Compte final {fin_opt.c2.RIB} Solde finale
                  {fin_opt.c2.soldeinitial}
                </h3>

                <hr />
                <h3> Montant : {fin_opt.montant} </h3>
              </>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default Virement;

