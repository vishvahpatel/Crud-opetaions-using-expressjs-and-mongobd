import Todo from "../models/Todo.js"

export const updateTodo = async(req,res)=>{
    try {
        const {id}= req.params
        const {title,description} = req.body
        const response = await Todo.findByIdAndUpdate({_id:id},{title,description,updatedAt: Date.now()})
        res.status(200).json({
            success:true,
            data:response,
            message:"udpated successfully"
        })
    } catch (error) {
        console.error(error)
        console.log(error)
        res.status(500).json({
            success:false,
            data:"Internal server error",
            message:error.message
        })
    }
}