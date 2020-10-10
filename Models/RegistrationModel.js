const mongoose  = require('mongoose');
const validate = require('validator');

const registrationSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    dob : {
        type: Date,
        trim: true,
        required: true
    },
    address : {
        type: String,
        trim: true,
        required: true
    },
    country: {
        type: String,
        trim: true,
        required: true
    },
    state: {
        type: String,
        trim: true,
        required: true
    },
    district: {
        type: String,
        trim: true,
    },
    taluk: {
        type: String,
        trim: true,
    },
    panchayat: {
        type: String,
        trim: true
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
    registrationType : {
        type: String,
        required: [true, 'please provide registration type'],
        enum : {
            values : ['volunteer', 'intern', 'subscriber', 'admin', 'internalUser', 'co-ordinator'],
            message : "Registration type should be volunteer, intern, subscriber, admin, internalUser, co-ordinator"
        }
    },
    dateOfReg : {
        type: Date,
        default: Date.now
    },
    idProof : {
        type: String,
        required: true
    },
    photo : {
        type: String,
        required: true
    },
    termsAndConditions : {
        type: Boolean,
        required: true,
        default: false
    },
    sex : {
        type: String,
        required: true,
        enum : ['male', 'female', 'other', 'prefer_not_to_say']
    },
    status: {
        type: String,
        default: 'Waiting Approval',
        enum: ['Approved',  'volunteer assigned', 'Waiting Approval', 'Rejected', 'under progress', 'case closed']
      }
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;