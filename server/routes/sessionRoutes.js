const express = require("express");
const {create} = require("../controllers/sessionController")
const router = express.Router();

router.post('/api/sessions', create);

module.exports = router;