const express = require("express");
const {authentication} = require("../controllers/authentication")
const router = express.Router();

router.use(authentication);

module.exports = router