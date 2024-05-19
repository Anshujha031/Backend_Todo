const express = require("express");
const router = express.Router();

//import controller
const{createTodo} = require("../controller/createTodo");
const{getTodo, getTodoById} = require("../controller/getTodo");
const{updateTodo} = require("../controller/updateTodo");
const {deleteTodo} = require("../controller/deleteTodo");




//defines API routes
//and i map the path to the controller to post type request
router.post("/createTodo" , createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodo/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);



module.exports = router;