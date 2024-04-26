const express = require('express');
const routes = express.Router();

module.exports = () => {
    routes.use("/ToDo", (req, res) => {
        res.send("Hello World");
        res.status(200).send({message: "send data"});
    });
    return routes;
}