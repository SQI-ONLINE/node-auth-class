const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    password: String
})

const saltRounds = 10;

userSchema.pre('save', function(next){
    const document = this;
    bcrypt.hash(document.password, saltRounds, (err, hashedPassword) => {
        if(!err){
            document.password = hashedPassword;
            next()
        }else{
            console.log(err);
        }
    })
});

userSchema.methods.validatePassword = function(password, callback){
    const document = this;
    console.log(document, "DOC")
    console.log(password, "PASS")
    bcrypt.compare(password, document.password, (err, same)=>{
        if(!err){
            callback(err, same)
        }else{
            next()
        }
    })
}
const User = mongoose.model('user', userSchema);

module.exports = User;