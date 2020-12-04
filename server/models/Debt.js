const mongoose = require('mongoose')

const DebtSchema = new mongoose.Schema({
    clientName:{
        type: String,
        required: true,
    },
    debtReason:{
        type: String,
        required: true,
    }, 
    debtValue:{
        type:Number,
        required:true,
    }, 
    debtDate:{
        type: Date,
        required:true,
    }
})

const Debt = mongoose.model("Debt",DebtSchema)
module.exports = Debt