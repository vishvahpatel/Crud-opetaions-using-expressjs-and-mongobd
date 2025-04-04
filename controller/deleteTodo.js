import Todo from "../models/Todo.js"

export const deleteTodo = async(req,res)=>{
    try {
        const id=req.params.id;
         await Todo.findByIdAndDelete({_id:id})
        res.status(200).json({
        success:true,
        message:"todo delete successfully"
    })
    } catch (error) {
        console.error(error);
        console.log(error)
        res.status(500).json({
            success:false,
            error:error.message,
            message:"Server error"
        })
    }
    
}