const express = require("express");
const router = express.Router();
const {
  UnverifiedUsers,
  VerificationUsers,
  getAllUsers,
  getOneUser,
  deleteUser,
  EditUser,
  signupAgent,
  GetAllAgents,
  newCompte,
  csltUser,
  histoUser,

} = require("../controllers/agent");
router.put("/ajoutCompte/:_id", VerificationUsers);
router.get("/preverified", UnverifiedUsers);
router.put("/newCompte/:_id", newCompte);
router.get("/accounts", getAllUsers);
router.get("/csltUser", csltUser);
router.get("/histoUser", histoUser);




router.delete("/:_id", deleteUser);
router.put("/:_id", EditUser);
router.get("/allAgents", GetAllAgents);

router.post("/newBankAgent", signupAgent);
router.get("/:_id", getOneUser);

// const isAuth = require("../middlewere/isAuth");
// const { isAgent } = require("../middlewere/Role");

// router.get("/preverified", isAuth, isAgent, UnverifiedUsers);
// router.get("/accounts", isAuth, isAgent, getAllUsers);

// router.get("/getOneUser/:userId", isAuth, isAgent, getOneUser);

// router.put("/ajoutCompte/:userId", isAuth, isAgent, VerificationUsers);

module.exports = router;
