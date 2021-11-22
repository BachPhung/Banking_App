const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = mongoose.Schema({
    email:{
        type:String,
        unique:true,
        minLength:10
    },
    name:String,
    passwordHash:String,
    transactions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Transaction'
    }],
    balance: Number,
    accountNumber:String,
    active: Boolean,
})

UserSchema.plugin(uniqueValidator)
UserSchema.set('toJSON',{
    transform:(document,returnedObject)=>{
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject._v
        delete returnedObject.passwordHash
    }
})

const User = mongoose.model('User',UserSchema)
module.exports = User