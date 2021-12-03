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
      <label>RIB </label>
      <input
        name="RIB"
        placeholder="RIB"
        value={compte.RIB}
        onChange={handleChange}
      />

      <label> soldeinitial </label>
      <input
        name="soldeinitial"
        placeholder="soldeinitial"
        value={compte.soldeinitial}
        onChange={handleChange}
      />
      <label> nature </label>
      <input
        name="nature"
        placeholder="nature"
        value={compte.nature}
        onChange={handleChange}
      />
      <Button
        onClick={() =>
          dispatch(verifUsers(props.match.params.id, compte, forward))
        }
      >
        Register Compte
      </Button>
    </div>
  );
};

export default VerifUsers;
