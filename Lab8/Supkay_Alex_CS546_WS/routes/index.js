const path = require("path");

const constructorMethod = app => {
    app.use("*", (req, res) => {
        res.render("palindrome/form");
    });
};

module.exports = constructorMethod;
