//install mongoose
//write and import instance of mongo
const  mongoose = require("mongoose");

//enviroment ke andr define kiya hoga bo load ho jayega process ke andr
require("dotenv").config();

//establish connection to the db
//install .env file
const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL)
    //     {
          //They has no effect since node js will be removed in the next major version
    //     useNewUrlParser:true,
    //     useUnifiedTopology:true,
    // })
    .then(()=> console.log("Db connection is successful"))
    .catch((error)=>{
        console.log("Issue in db connection")
        console.error(error.message);
        //Iska ky means hai
        process.exit(1);
    });

}
    module.exports = dbConnect;
    