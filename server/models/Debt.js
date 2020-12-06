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
        min: '2020-12-07',
        max: '2021-12-07'
    }
})

const Debt = mongoose.model("Debt",DebtSchema)
module.exports = Debt