import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { rechercheCpt, retraitUser } from "../../JS/actions/compte";
const Retrait = () => {
  const [compte, setCompte] = useState({ RIB: "", montant: 0 });
  const dispatch = useDispatch();
  const cpt = useSelector((state) => state.compteReducer.cpt);
  const fin_opt = useSelector((state) => state.compteReducer.fin_opt);
  const handleChange = (e) => {
    setCompte({ ...compte, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {cpt !== null ? (
        <div className="col-lg-12 well">
          <div className="row">
            <form>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>Numero de compte</label>
                  <input
                    name="RIB"
                    placeholder="RIB"
                    className="form-control"
                    disabled
                    value={cpt.RIB}
                  />
                </div>

                {/* <label>RIB </label>
          <input name="RIB" placeholder="RIB" disabled value={cpt.RIB} /> */}
                <div className="form-group">
                  <label> Solde initial</label>
                  <input
                    name="soldeinitial"
                    placeholder="soldeinitial"
                    className="form-control"
                    disabled
                    value={cpt.soldeinitial}
                  />
                </div>
                {/* <label> soldeinitial </label>
          <input
            name="soldeinitial"
            placeholder="soldeinitial"
            disabled
            value={cpt.soldeinitial}
          /> */}
                {/* <div className="form-group">
            <label> soldeinitial</label>
            <input
              name="soldeinitial"
              placeholder="soldeinitial"
              disabled
              value={cpt.soldeinitial}
            />
          </div> */}
                <div className="form-group">
                  <label> montant</label>
                  <input
                    name="montant"
                    placeholder="montant"
                    value={compte.montant}
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                {/* <label> montant </label>
          <input
            name="montant"
            placeholder="montant"
            value={compte.montant}
            onChange={handleChange}
          /> */}
                <Button onClick={() => dispatch(retraitUser(compte))}>
                  {" "}
                  Effectuer{" "}
                </Button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div>
          {/*---- Include the above in your HEAD tag --------*/}
          <div className="container">
            <h1 className="well">Retrait d'argent </h1>
            <div className="col-lg-12 well">
              <div className="row">
                <form>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Numero de compte</label>
                      <input
                        type="text"
                        placeholder="RIB..."
                        className="form-control"
                        name="RIB"
                        value={compte.RIB}
                        onChange={handleChange}
                      />
                    </div>
                    <Button onClick={() => dispatch(rechercheCpt(compte.RIB))}>
                      {" "}
                      chercher{" "}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {fin_opt === null ? (
            ""
          ) : (
            <div>
              <h1>
                Cher client,Votre opération de retrait a été bien effectuée. Le Numero de
                compte : {fin_opt.RIB} a été mise à jour avec succès
              </h1>
              <h1>
                Ancien solde :
                {Number(fin_opt.soldeinitial) + Number(compte.montant)}
              </h1>
              <h1> Montant à retirer : {compte.montant}</h1>
              <h1> Nouveau solde : {fin_opt.soldeinitial}</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

 export default Retrait;

// import React, { useState } from "react";
// import { Button } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { rechercheCpt, retraitUser } from "../../JS/actions/compte";
// const Retrait = () => { */}



















