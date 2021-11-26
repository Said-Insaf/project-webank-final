import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { histoUser } from "../../JS/actions/compte";
import "./HistoComptes.css";
const HistoComptes = () => {
  //   const [user, setUser] = useState({ cin: "", rib: "" });
  const [compte, setCompte] = useState({ cin: "", rib: "" });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setCompte({ ...compte, [e.target.name]: e.target.value });
  };
  const historiques = useSelector((state) => state.compteReducer.histos);
  const erreur = useSelector((state) => state.compteReducer.errors);

  const reset = () => {
    setCompte({ cin: "", rib: "" });
    dispatch(histoUser(compte, "supp"));
  };

  return (
    <>
      {historiques ? (
        <>
          <table className="tab-histo">
            <th>operation</th>
            <th>montant</th>
            <th>solde Initiale</th>
            <th>solde Finale</th>
            <th>temps operation</th>
            <th>date operation</th>
            {historiques.map((hist, key) => {
              return (
                <tr key={key}>
                  <td> {hist.operation} </td>
                  <td> {hist.montant} </td>
                  <td> {hist.soldeInt} </td>
                  <td> {hist.soldeFin} </td>
                  <td> {hist.date.split("T")[1].split(".")[0]} </td>
                  <td> {hist.date.split("T")[0]} </td>
                </tr>
              );
            })}
          </table>
          <Button onClick={reset}>Consulter Autre Compte</Button>
        </>
      ) : (
        <div className="container">
          <h1 className="well">Extrait de compte</h1>
          <div className="col-lg-12 well">
            <div className="row">
              <form>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label>CIN</label>
                    <input
                      placeholder="CIN"
                      className="form-control"
                      name="cin"
                      value={compte.cin}
                      onChange={handleChange}
                    />
                    <label>Numero de compte </label>
                    <input
                      placeholder="RIB"
                      className="form-control"
                      name="rib"
                      value={compte.rib}
                      onChange={handleChange}
                    />
                    <Button
                      onClick={() => dispatch(histoUser(compte, "consulter"))}
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
      )}
    </>
  );
};

export default HistoComptes;
