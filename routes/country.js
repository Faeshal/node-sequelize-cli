require("pretty-error").start();
const express = require("express");
const router = express.Router();
const countryController = require("../controllers/country");

// router.get("/api/products", countryController.getProducts);

// router.post("/api/products", protect, countryController.createProduct);

// router.get("/api/products/:id", protect, countryController.getProduct);

// router.patch("/api/products/:id", protect, countryController.updateProduct);

// router.delete("/api/products/:id", protect, countryController.deleteProduct);

module.exports = router;
