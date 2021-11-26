// require express
const express = require("express");
const {
  CreateAccount,
  Depot,
  Retrait,
  Virements,
  RchercherCmp,
} = require("../controllers/compte");

// express router
const router = express.Router();


router.post("/add",CreateAccount);
router.post("/find", RchercherCmp);
router.put("/depot",Depot);
router.put("/retrait",Retrait)
router.put("/virements", Virements);


//export
module.exports = router;
