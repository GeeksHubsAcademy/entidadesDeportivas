const mongoose = require('mongoose');
const {isEmail} = require('validator');

const UserSchema = new mongoose.Schema({
    _id:{
        type: Number,
        required: true,
        unique:true
    },
    username:{
        type: String,
        minlength:5,
        maxlength:25,
        required: true,
        unique:true
    },
    name:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: false,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
        validate: {
            isAsync: true,
            validator: (email) => isEmail(email, { domain_specific_validation: true}),
            message: '{VALUE} is not a valid email.'
        }
    }
});

module.exports = mongoose.model('users', UserSchema);


