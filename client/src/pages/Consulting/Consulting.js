import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { consulter, autreCompte } from "../../JS/actions/user";
const Consulting = () => {
  const [rib, setRib] = useState("");
  const dispatch = useDispatch();

  const solde = useSelector((state) => state.userReducer.compteUser)
  const handleChange = (e) => {
    setRib(e.target.value);
  };

  return (
    <div>
      {solde === null ? (
       
        <div className="container">
          <h1 className="well">Consultation de solde</h1>
          <div className="col-lg-12 well">
            <div className="row">
              <form>
                <div className="col-sm-12">
                  <div className="form-group">
          <label>Numero de compte</label>
          <input name="RIB" placeholder="RIB..." className = "form-control" value={rib} onChange={handleChange} />
          <Button onClick={() => dispatch(consulter(rib))}>Voir Solde</Button>
      
        </div>
        </div>
        </form>
        </div></div></div>
      ) : (
        <>
          {solde.compte === null ? (
            <h1>{solde.msg}</h1>
          ) : (
            <h1>Mon Solde est {solde.compte.soldeinitial} </h1>
          )}
          <Button onClick={() => dispatch(autreCompte())}>
            Consulter autre compte
          </Button>
        </>
      )}
    </div>
  );
};

export default Consulting;
