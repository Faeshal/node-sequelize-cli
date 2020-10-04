require("pretty-error").start();
const chalk = require("chalk");
const asyncHandler = require("express-async-handler");
const { Country } = require("../models");

// * @route GET /api/countries
// @desc    Get All country
// @access  Public
exports.getCountries = asyncHandler(async (req, res, next) => {
  const country = await Country.findAll();
  if (country.length === 0) {
    return res
      .status(404)
      .json({ success: true, message: "Country Data is Empty" });
  }
  res.status(200).json({ success: true, total: country.length, data: country });
});

// * @route POST /api/countries
// @desc    Create New country
// @access  Public
exports.createCountry = asyncHandler(async (req, res, next) => {
  const { countryName, capital } = req.body;

  // * Validation
  if (!countryName) {
    return res
      .status(400)
      .json({ success: false, message: "countryName is Required" });
  }
  // * Push data to mysql
  const result = await Country.create({
    countryName,
    capital,
  });

  res.status(201).json({ success: true, data: result });
});

// * @route GET /api/countries/:id
// @desc    Get country by Id
// @access  Public
exports.getCountry = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const country = await Country.findByPk(id);
  if (!country) {
    return res
      .status(404)
      .json({ success: true, message: "No country With This ID" });
  }
  res.status(200).json({ success: true, data: country });
});

// * @route PUT /api/countries/:id
// @desc    Update country
// @access  Public
exports.updateCountry = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const country = await Country.update(req.body, {
    where: {
      id: id,
    },
  });

  if (country == 1) {
    return res
      .status(201)
      .json({ success: true, message: "Data Succesfully Update" });
  } else {
    return res.status(404).json({
      success: false,
      message: "Data Failed To Update or Id is Not Found",
    });
  }
});

// * @route DELETE /api/countries/:id
// @desc    Delete country
// @access  Public
exports.deleteCountry = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const country = await Country.destroy({
    where: {
      id: id,
    },
  });

  if (!country) {
    return res.status(404).json({
      success: false,
      message: `No User With ID: ${id}`,
    });
  }

  res.status(200).json({ success: true, message: "country Succesfull Delete" });
});
