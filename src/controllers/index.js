const express = require("express");
const ToDoController = require("./ToDo");
const routes = express.Router();

module.exports = () => {
    routes.use("/api/todo", ToDoController());
    return routes;
};

