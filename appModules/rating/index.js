const config = require ("./config");
const makeRatingFile = require("./rating-file");
const calculations = require ("./calculations");

module.exports = {
    config,
    makeRatingFile,
    ...calculations,
};