require("pretty-error").start();
const express = require("express");
const router = express.Router();
const countryController = require("../controllers/country");
const { protect } = require("../middleware/auth");

router.get("/api/countries", protect, countryController.getCountries);

router.post("/api/countries", protect, countryController.createCountry);

router.get("/api/countries/:id", protect, countryController.getCountry);

router.patch("/api/countries/:id", protect, countryController.updateCountry);

router.delete("/api/countries/:id", protect, countryController.deleteCountry);

module.exports = router;
