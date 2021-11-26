import React from "react";

import { CLEAR_ALL } from "../../JS/actionTypes/compte";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "./NavBarOpt.css";
const NavbarOpt = () => {
  const user = useSelector((state) => state.userReducer.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const goTo = (link) => {
    dispatch({ type: CLEAR_ALL })
    history.push(link);
  };

  return (
    <>
      {user.role && user.role !== "user" ? (
        <ul className="navOpt">
          <li>
            <h3>Operations</h3>
            <h3
              className="hdn"
              onClick={() => {
                goTo("/retrait");
              }}
            >
              Retrait
            </h3>
            <h3
              className="hdn"
              onClick={() => {
                goTo("/depot");
              }}
            >
              Depot
            </h3>
            <h3
              className="hdn"
              onClick={() => {
                goTo("/virements");
              }}
            >
              Virement Bancaire
            </h3>
          </li>
          {user.role === "admin" ? (
            <li>
              <h3>Gestion des Agents </h3>
              <h3
                className="hdn"
                onClick={() => {
                  goTo("/newBankAgent");
                }}
              >
                Nouveaux Employés
              </h3>
              <h3
                className="hdn"
                onClick={() => {
                  goTo("/allAgents");
                }}
              >
                Les Employés
              </h3>
            </li>
          ) : (
            <></>
          )}
          <li>
            <h3>Gestion des clients </h3>
            <h3
              className="hdn"
              onClick={() => {
                goTo("/accounts");
              }}
            >
              Nos clients
            </h3>
            <h3
              className="hdn"
              onClick={() => {
                goTo("/preverified");
              }}
            >
              Pré-vérification clients
            </h3>
            <h3
              className="hdn"
              onClick={() => {
                goTo("/add");
              }}
            >
              Ouvrir un compte
            </h3>
          </li>

          <li>
            <h3> Consultation des Comptes </h3>
            <h3
              className="hdn"
              onClick={() => {
                goTo("/csltUser");
              }}
            >
              Consultation de solde
            </h3>
            <h3
              className="hdn"
              onClick={() => {
                goTo("/histoUser");
              }}
            >
              Extrait de compte
            </h3>
          </li>
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default NavbarOpt;
