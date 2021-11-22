const usersRoute = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')
require('dotenv').config();
const transporter = require('../controllers/transporter')

usersRoute.post('/signup',async(req,res)=>{
    const body = req.body
    const {name,email,passwordHash} = req.body
    const saltRounds = 10
    const passwordHash1 = await bcrypt.hash(passwordHash,saltRounds)
    const user = new User({
        name: body.name,
        email: body.email,
        active: false,
        passwordHash: passwordHash1,
        balance: 0,
    })
    const token = await jwt.sign({name,email,passwordHash}, process.env.JWT_ACC_ACTIVATE,{expiresIn:'30m'})
    const mailDetails = {
        from: "quangbachstts@gmail.com",
        to: body.email,
        subject: 'Account Activation Link',
        html: `
            <h2>Please click on the given link to activate your account</h2>
            <a>${process.env.CLIENT_URL}/api/authentication/activate/${token}</a>
        `
    };
    
    console.log(process.env.JWT_ACC_ACTIVATE);
    transporter.sendMail(mailDetails,function(err,body){
        if(err){
            res.status(404).json(err)
            console.log('Fail to send email', err);
        }
    })
    await user.save((err,success)=>{
        if(err){
            console.log("Fail to signup: ",err);
            return res.status(400).json({error:err})
        }
        res.status(200).json({message: "Email has been sent, kindly activate your account"})
    })
})

usersRoute.post('/authentication/active/:token',async(req,res)=>{
    const token = req.params.token;
    if(token){
        jwt.verify(token,process.env.JWT_ACC_ACTIVATE,function(err,decodedToken){
            if(err){
                return res.status(400).json({error:'Incorrent or Expired link.'})
            }
            const {name,email,passwordHash} = decodedToken
            const unactiveUser =  User.findOne({email})
            const updatedUser = {
                ...unactiveUser,
                active:true,
            }
            const filter = email
            User.findOneAndUpdate(filter, updatedUser)
            res.status(200).json({message:'Activate success!'})
        })
    }
})

module.exports = usersRoute