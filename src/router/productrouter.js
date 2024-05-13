// productrouter.js
const express = require('express');
const productRouters = express.Router();
const dataBooks = require('../data/dataBooks.json');

productRouters.route("/").get((req, res) => {
    res.render("booksDetail", {
        dataBooks
    });
});

// productRouters.route("/:productTitle").get((req, res) => {
//     res.render("booksDetail", { dataBooks });
// });

module.exports = productRouters;