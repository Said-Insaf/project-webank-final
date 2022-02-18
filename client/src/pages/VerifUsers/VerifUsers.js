import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { verifUsers } from "../../JS/actions/compte";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const VerifUsers = (props) => {
  const history = useHistory();

  const [compte, setCompte] = useState({
    RIB: "",
    soldeinitial: "",
    nature: "",
  });
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setCompte({ ...compte, [e.target.name]: e.target.value });
  };
  const forward = () => {
    history.push("/accounts");
  };
  return (
    <div>
      {/*---- Include the above in your HEAD tag --------*/}
      <div className="container">
        <h1 className="well">Ouvrir Compte aprés vérification</h1>
        <div className="col-lg-12 well">
          <div className="row">
            <form>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>Numero de compte</label>
                  <input
                    type="text"
                    placeholder="Enter RIB Here.."
                    className="form-control"
                    name="RIB"
                    value={compte.RIB}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Nature de compte</label>
                  <input
                    type="text"
                    placeholder="Enter Type account Here.."
                    className="form-control"
                    name="nature"
                    value={compte.nature}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Solde initial</label>
                  <input
                    type="text"
                    placeholder="Enter Sold Here.."
                    className="form-control"
                    name="soldeinitial"
                    value={compte.soldeinitial}
                    onChange={handleChange}
                  />
                </div>

                <>
                  <Button
                    onClick={() =>
                      dispatch(
                        verifUsers(props.match.params.id, compte, forward)
                      )
                    }
                  >
                    Register Compte
                  </Button>
                </>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifUsers;

// import React, { useState } from "react";
// import { Button } from "react-bootstrap";
// import { verifUsers } from "../../JS/actions/compte";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";

// const VerifUsers = (props) => {
//   const history = useHistory();

//   const [compte, setCompte] = useState({
//     RIB: "",
//     soldeinitial: "",
//     nature: "",
//   });
//   const [user, setUser] = useState();
//   const dispatch = useDispatch();
//   const handleChange = (e) => {
//     setCompte({ ...compte, [e.target.name]: e.target.value });
//   };
//   const forward = () => {
//     history.push("/accounts");
//   };
//   return (
//     <div>
//       <label>RIB </label>
//       <input
//         name="RIB"
//         placeholder="RIB"
//         value={compte.RIB}
//         onChange={handleChange}
//       />

//       <label> soldeinitial </label>
//       <input
//         name="soldeinitial"
//         placeholder="soldeinitial"
//         value={compte.soldeinitial}
//         onChange={handleChange}
//       />
//       <label> nature </label>
//       <input
//         name="nature"
//         placeholder="nature"
//         value={compte.nature}
//         onChange={handleChange}
//       />
//       <Button
//         onClick={() =>
//           dispatch(verifUsers(props.match.params.id, compte, forward))
//         }
//       >
//         Register Compte
//       </Button>
//     </div>
//   );
// };

// export default VerifUsers;
