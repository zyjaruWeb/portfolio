// specifies technicalities of processed data

const mongoose = require("mongoose")


const EntrySchema = new mongoose.Schema({
    date: {
        type:String,
        required: [true,"must provide date dd/mm/yyyy"], 
        maxLength: 10,
    },
    from: {
        type:String,
        required: [true,"must provide from or to who"],
        maxLength: 20,
    },
    description: {
        type:String,
        required: [true,"must provide description"],
        maxLength: 20,
    },
    amount:{
        type:Number,
        min: 0,
        required: [true,"must provide amount, a '-' means deduct form you balance (paid), '+' means you received "],
        maxLength: 20,
    }
})


module.exports = mongoose.model("Data", EntrySchema)