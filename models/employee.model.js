const mongoose = require('mongoose')

let employeeSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true
    }
})


let Employee = mongoose.model('Employee',employeeSchema)
module.exports = Employee