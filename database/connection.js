const mongoose = require("mongoose");
const db = "mongodb+srv://spherex:spherex@cluster0.witlisi.mongodb.net/spherex?retryWrites=true&w=majority"



mongoose.connect(db).then(() =>{
console.log("connection successful");
}).catch((err) =>{
    console.log(err)
    console.log("no connection");
})