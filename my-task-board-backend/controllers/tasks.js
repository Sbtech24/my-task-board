exports.getAllTasks =(req,res,next)=>{
    res.send("Hello")
     next()
}

exports.getSingleTask =(req,res,next)=>{
    res.send("get single task")
        next()
}

exports.createTask =(req,res,next)=>{
     res.send("Create new task")
        next()
}

exports.updateTask =(req,res,next)=>{
     res.send("Update single task")
        next()
}

exports.deleteTask =(req,res,next)=>{
     res.send("Delete single task")
    next()
}

