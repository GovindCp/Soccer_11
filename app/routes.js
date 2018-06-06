const express = require("express"),
    UserController = require("../app/controller/userController");
    FootballerController = require("../app/controller/footballerController");

const router = express.Router();
router.get("/footballers/get", FootballerController.getfootballerDetails);
router.get("/footballers/list", FootballerController.getfootballersList);
router.get("/footballers/category/search", FootballerController.getfootballersByCategory);
router.get("/footballers/advance/search", FootballerController.footBallerAdvanceSearch);

module.exports = router;

