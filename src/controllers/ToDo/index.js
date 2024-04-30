const express = require("express");
const getTodo = require("./get-todo");


const router = express.Router();

// const todos = [];


module.exports = () => {
    router.get("/", getTodo);
    return router
}

