// mongoose connection 

const mongoose = require("mongoose")

//make connectDB variable connect to the url using mongoose

const connectDB = (url)=>{
    return mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
}

module.exports = connectDB