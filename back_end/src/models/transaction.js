const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    content: {
        type:String,
        required: true,
        minlength:5
    },
    date: Date,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    amount: {
       type: Number,
       required:true,
       minlength:1
    }
})

transactionSchema.set('toJSON',{
    transform:(document, returnedObject)=>{
        returnedObject.id = returnedObject._id.soString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Transaction', transactionSchema)