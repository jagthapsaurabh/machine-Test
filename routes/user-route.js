const express = require("express");
const router = express.Router();
const userController = require("../controller/user-controller");

router.post("/create", userController.create);
router.get("/data", userController.getdata);

module.exports = router;
