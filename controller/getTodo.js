const Todo = require("../models/Todo");


exports.getTodo  = async(req,res) => {

    try{
           //Fetch all items from database
           const todos = await Todo.find({});

           //response
           res.status(200)
           .json({
            success:true,
            data:todos,
            message:"Entire todo data is fetched",
           })
    }
    catch(err){
            console.error(err);
            res.status(500)
            .json({
                success:false,
                data:"internal server error",
                message:err.message,
            })
    }
}



exports.getTodoById = async(req,res)=>{

    try{

        //extract todo items based on Id
        const id = req.params.id;
        const todo = await Todo.findById( {_id:id})

        //data forgiven when id not found

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found with given ID",
            })
        }
        //data for given id found 
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfuly fetched`,
        })

    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
}