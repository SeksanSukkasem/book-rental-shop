
const express = require('express');
const productRouters = express.Router();
const dataBooks = require('../data/dataBooks.json');

productRouters.route("/").get((req, res) => {
    res.render("products", {
        dataBooks
    });
});

// productRouters.route("/books").get((req, res) => {
//     res.render("product", { product });
// });

// productRouters.route("/books/product").get((req, res) => {
//     res.render("product", {
//         dataBooks
//     });
// });

module.exports = productRouters;