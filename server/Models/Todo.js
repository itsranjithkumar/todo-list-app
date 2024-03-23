const mongoose = require('mongoose')

const TodoScheme = new mongoose.Schema({
    task: String

})    


const TodoModel = mongoose.model("todos", TodoScheme)
module.exports = TodoModel
    
