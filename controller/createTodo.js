//import model
const Todo =require("../models/Todo");

//define routes handler

exports.createTodo = async(req,res) =>{
      try{
            //extract title and desciption from request body
            const {title,description} = req.body;
            //create a new Todo object and inserte in db
            const response = await Todo.create({title,description});
            //send a jason response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'Entry Created successfully'
                }
            );

        }
            
        catch(err){
                     console.error(err);
                     console.log(err);
                     res.status(500)
                     .json({
                        success:false,
                        data:"internal server error",
                        message:err.message,
                     })

        }
    
}
