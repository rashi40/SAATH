const mongoose  = require('mongoose');
const validate = require('validator');

const subscriberSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    mobPhone: {
        type: Number,
        validate: {
            validator: function(v){
                return /d{0}/.test(v);
            },
            message: '{VALUE}, is not a valid 10 digit number !'
        },
    email : {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
    }
    },
    dateOfSub : {
        type: Date,
        default: Date.now
    },
    sex : {
        type: String,
        required: true,
        enum : ['male', 'female', 'other', 'prefer_not_to_say']
    },
});


const Subscriber = mongoose.model('Subscriber', subscriberSchema);

module.exports = Subscriber;