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
        <div className="col-sm-12">
          <link
            href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
            rel="stylesheet"
            id="bootstrap-css"
          />
          <div className="form-group">
            <label>RIB</label>
            <input name="RIB" placeholder="RIB" disabled value={cpt.RIB} />
          </div>

          {/* <label>RIB </label>
          <input name="RIB" placeholder="RIB" disabled value={cpt.RIB} /> */}
          <div className="form-group">
            <label> soldeinitial</label>
            <input
              name="soldeinitial"
              placeholder="soldeinitial"
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
          <div className="form-group">
            <label> soldeinitial</label>
            <input
              name="soldeinitial"
              placeholder="soldeinitial"
              disabled
              value={cpt.soldeinitial}
            />
          </div>
          <div className="form-group">
            <label> montant</label>
            <input
              name="montant"
              placeholder="montant"
              value={compte.montant}
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
      ) : (
        <div>
          <link
            href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
            rel="stylesheet"
            id="bootstrap-css"
          />
          {/*---- Include the above in your HEAD tag --------*/}
          {/* <div className="container">
            <h1 className="well">Consultation du Solde</h1>
            <div className="col-lg-12 well">
              <div className="row">
                <form> */}
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
            <Button onClick={() => dispatch(rechercheCpt(compte.RIB))}>
              {" "}
              chercher{" "}
            </Button>
          </div>
          {/* </form>
              </div>
            </div>
          </div> */}

          {fin_opt === null ? (
            ""
          ) : (
            <div>
              <h1>le compte de rib : {fin_opt.RIB} mise à jour avec succées</h1>
              <h1>
                ancien solde :
                {Number(fin_opt.soldeinitial) + Number(compte.montant)}
              </h1>
              <h1> montant : {compte.montant}</h1>
              <h1> nouveau solde : {fin_opt.soldeinitial}</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Retrait
// (
//   <div>
//     <link
//       href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
//       rel="stylesheet"
//       id="bootstrap-css"
//     />
//     {/*---- Include the above in your HEAD tag --------*/}
//     <div className="container">
//       <h1 className="well">Consultation du Solde</h1>
//       <div className="col-lg-12 well">
//         <div className="row">
//           <form>
//             <div className="col-sm-12">
//               <div className="form-group">
//                 <label>RIB</label>
//                 <input
//                   type="text"
//                   placeholder="RIB..."
//                   className="form-control"
//                   name="rib"
//                   value={compte.rib}
//                   onChange={handleChange}
//                 />
//               </div>
//               <Button onClick={() => dispatch(rechercheCpt(compte.RIB))}>
//                 {" "}
//                 chercher{" "}
//               </Button>
//               <h2>{erreur && erreur.data.msg}</h2>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// return (
//   <div>
//     <link
//       href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
//       rel="stylesheet"
//       id="bootstrap-css"
//     />
//     {/*---- Include the above in your HEAD tag --------*/}
//     <div className="container">
//       <h1 className="well">Consultation du Solde</h1>
//       <div className="col-lg-12 well">
//         <div className="row">
//           <form>
//             <div className="col-sm-12">
//               <div className="form-group">
//                 <label>RIB</label>
//                 <input
//                   type="text"
//                   placeholder="RIB..."
//                   className="form-control"
//                   name="rib"
//                   value={compte.rib}
//                   onChange={handleChange}
//                 />
//               </div>
//               <Button onClick={() => dispatch(csltUser(compte, "consulter"))}>
//                 consulter
//               </Button>
//               <h2>{erreur && erreur.data.msg}</h2>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// import React, { useState, useEffect } from "react";
// import { Button } from "react-bootstrap";
// import { useSelector, useDispatch } from "react-redux";
// import { csltUser, autreCompte } from "../../JS/actions/compte";
// const ConsultSldBank = () => {
//   //   const [user, setUser] = useState({ cin: "", rib: "" });
//   const [compte, setCompte] = useState({ cin: "", rib: "" });
//   const dispatch = useDispatch();
//   const handleChange = (e) => {
//     setCompte({ ...compte, [e.target.name]: e.target.value });
//   };
//   const account = useSelector((state) => state.compteReducer.account);
//   const erreur = useSelector((state) => state.compteReducer.errors);

//   const reset = () => {
//     setCompte({ cin: "", rib: "" });
//     dispatch(csltUser(compte, "supp"));
//   };

//   return (
//     <>
//       {account ? (
//         <>
//           <h1>Solde Du Compte : {account.soldeinitial}</h1>
//           <Button onClick={reset}>Consulter Autre Compte</Button>
//         </>
//       ) : (
//         <div>
//           {/* <link
//         href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
//         rel="stylesheet"
//         id="bootstrap-css"
//       /> */}
//           {/*---- Include the above in your HEAD tag --------*/}
//           <div className="container">
//             <h1 className="well">Fiche métier Agent administratif</h1>
//             <div className="col-lg-12 well">
//               <div className="row">
//                 <form>
//                   <div className="col-sm-12">
//                     <div className="form-group">
//                       <label>CIN</label>
//                       <input
//                         type="text"
//                         placeholder="CIN..."
//                         className="form-control"
//                         name="CIN"
//                         value={compte.cin}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className="row">
//                       <div className="col-sm-6 form-group">
//                         <label>RIB</label>
//                         <input
//                           type="text"
//                           placeholder="RIB..."
//                           className="form-control"
//                           name="RIB"
//                           value={compte.rib}
//                           onChange={handleChange}
//                         />
//                       </div>
//                       <Button
//                         onClick={() => dispatch(csltUser(compte, "consulter"))}
//                       >
//                         consulter
//                       </Button>
//                       <h2>{erreur && erreur.data.msg}</h2>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// export default ConsultSldBank;
