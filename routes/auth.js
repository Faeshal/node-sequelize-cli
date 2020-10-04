require("pretty-error").start();
const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

router.post("/api/auth/register", authController.register);

router.post("/api/auth/login", authController.login);

module.exports = router;
