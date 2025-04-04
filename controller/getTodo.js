import Todo from "../models/Todo.js"

export const getTodo = async (req,res)=>{
    try {
        const response= await Todo.find({})
        res.status(200).json({
            success:true,
            data:response,
            message:"data found successfully"
        })
    } catch (error) {
        console.error(error)
        console.log(error)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        })
    }
}

export const getTodoById = async(req,res)=>{
    try {
        const id= req.params.id
        const response = await Todo.findById({_id:id})
        if(!response){
            res.status(404).json({
                success:false,
                message:"no data found"
            })
        }
        res.status(200).json({
            success:true,
            data:response,
            message:"data found successfully"
        })
    } catch (error) {
        console.error(error)
        console.log(error)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        })
    }
}