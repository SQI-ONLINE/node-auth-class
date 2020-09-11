const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const secret = process.env.HASH_SECRET;
const signup = (req, res) => {
    const { firstName, lastName, email, phone, password } = req.body;
    user = { firstName, lastName, email, phone, password };
    console.log(user);
    let new_user = new User(user);

    new_user.save()

    res.send({message: "saved new user"})
}

const signin = (req, res) => {
    const { email, password } = req.body;

    User.findOne({email: email}, (err, user)=>{
        if(!err){
            if(user){
                user.validatePassword(password, (err, same)=>{
                    console.log(same, "SAME VALUE?")
                    if(err){
                        res.status(500).send({message: "Something went wrong!"})
                    }else if(!same){
                        res.status(401).send({message: "Unauthorized"})
                    }else{
                        const payload = { email };
                        console.log(jwt, "THE REAL JJJJ")
                        const token = jwt.sign(payload, secret, {expiresIn: '1h'})
                        
                        res.status(200).json({token: token, message: "Logged In"})
                    }
                })
            }else{
                res.status(401).send({message: "Invalid Credentials"})
            }
        }
    })
}

module.exports = {signup, signin}