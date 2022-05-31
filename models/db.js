const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://anand:1234567890@cluster0.urby7.mongodb.net/EmpApp?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},(err) =>{
    if(err) console.log("Error",err)
    console.log("Mongodb Connected")
})

