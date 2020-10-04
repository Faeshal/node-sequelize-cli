// require("pretty-error").start();
// const chalk = require("chalk");
// const asyncHandler = require("express-async-handler");
// const { models } = require("../models");
// const Product = models.product;
// const User = models.user;
// // * @route GET /api/products
// // @desc    Get All Product
// // @access  Public
// exports.getProducts = asyncHandler(async (req, res, next) => {
//   const product = await Product.findAll({
//     include: { model: User, attributes: ["id", "name", "email"] },
//     attributes: { exclude: ["userId"] },
//   });
//   if (product.length === 0) {
//     return res
//       .status(404)
//       .json({ success: true, message: "Product Data is Empty" });
//   }
//   res.status(200).json({ success: true, total: product.length, data: product });
// });

// // * @route POST /api/products
// // @desc    Create New Product
// // @access  Public
// exports.createProduct = asyncHandler(async (req, res, next) => {
//   const { name, variants, outlets, category, price, cost } = req.body;

//   // * Validation
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Name is Required" });
//   }
//   // * Push data to mysql
//   const result = await Product.create({
//     name,
//     variants,
//     outlets,
//     category,
//     price,
//     cost,
//     userId: req.user,
//   });

//   res.status(201).json({ success: true, data: result });
// });

// // * @route GET /api/products/:id
// // @desc    Get Product by Id
// // @access  Public
// exports.getProduct = asyncHandler(async (req, res, next) => {
//   const id = req.params.id;
//   const product = await Product.findByPk(id);
//   if (!product) {
//     return res
//       .status(404)
//       .json({ success: true, message: "No Product With This ID" });
//   }
//   res.status(200).json({ success: true, data: product });
// });

// // * @route PUT /api/products/:id
// // @desc    Update Product
// // @access  Public
// exports.updateProduct = asyncHandler(async (req, res, next) => {
//   const id = req.params.id;
//   const product = await Product.update(req.body, {
//     where: {
//       id: id,
//     },
//   });

//   if (product == 1) {
//     return res
//       .status(201)
//       .json({ success: true, message: "Data Succesfully Update" });
//   } else {
//     return res.status(404).json({
//       success: false,
//       message: "Data Failed To Update or Id is Not Found",
//     });
//   }
// });

// // * @route DELETE /api/products/:id
// // @desc    Delete Product
// // @access  Public
// exports.deleteProduct = asyncHandler(async (req, res, next) => {
//   const id = req.params.id;
//   const product = await Product.destroy({
//     where: {
//       id: id,
//     },
//   });

//   if (!product) {
//     return res.status(404).json({
//       success: false,
//       message: `No User With ID: ${id}`,
//     });
//   }

//   res.status(200).json({ success: true, message: "Product Succesfull Delete" });
// });
