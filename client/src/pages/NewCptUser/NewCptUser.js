import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { newCptUser } from "../../JS/actions/compte";
import { useDispatch } from "react-redux";

const NewCptUsers = ({ match }) => {
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
        onClick={() => dispatch(newCptUser(match.params.id, compte))}
      >
        Register Compte
      </Button>
    </div>
  );
};

export default NewCptUsers;
