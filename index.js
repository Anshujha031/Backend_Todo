//import the express


const express = require('express')
const app = express();

//load config from env file
//config will run on process object and you can find port number if not found we use 4000
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for Todo API
const todoRoutes = require("./routes/Todos");
//mount the API routes , all api will added
app.use("/api/v1",todoRoutes);


//server start
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})


//connect to the database
const dbconnect = require("./config/database");
dbconnect();

//default Route
app.get("/" ,(req,res) => {
    res.send(`<h1>This is HOMEPAGE baby </h1> `);
})