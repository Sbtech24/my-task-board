const mongoose = require("mongoose")

const TaskBoardScheme = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Add a name"]
    },
    description:{
        type:String,
        required:[true,"Please Add a name"],
        maxLength:[500,"Not more than 500 characters"]

    }
})

module.exports =mongoose.model("Task",TaskBoardScheme)