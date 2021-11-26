import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { autreCompteHisto, consulterHisto } from "../../JS/actions/user";
import "../HistoComptes/HistoComptes.css";
const Consulting = () => {
  const [rib, setRib] = useState("");
  const dispatch = useDispatch();

  const histos = useSelector((state) => state.userReducer.histos);
  const handleChange = (e) => {
    setRib(e.target.value);
  };

  return (
    <div>
      {histos === null ? (
      
        <div className="container">
          <h1 className="well">Historique de compte</h1>
          <div className="col-lg-12 well">
            <div className="row">
              <form>
                <div className="col-sm-12">
                  <div className="form-group">
          <label>Numero de compte</label>
        
          <input className="form-control" name="RIB" value={rib} onChange={handleChange} />
          <Button onClick={() => dispatch(consulterHisto(rib))}>
         Voir Historique
          </Button>
    </div>
        </div>
        </form>
        </div>
        </div>
        </div>
      ) : (
        <>
          <table className="tab-histo">
            <th>operation</th>
            <th>montant</th>
            <th>solde Initiale</th>
            <th>solde Finale</th>
            <th>temps operation</th>
            <th>date operation</th>
            {histos.map((hist, key) => {
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
          <Button onClick={() => dispatch(autreCompteHisto())}>
            Consulter autre compte
          </Button>
        </>
      )}
    </div>
  );
};

export default Consulting;
