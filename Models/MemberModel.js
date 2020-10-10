const mongoose  = require('mongoose');
const validate = require('validator');

const memberSchema = new mongoose.Schema({
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
    dateOfReg : {
        type: Date,
        default: Date.now
    },
    photo : {
        type: String,
        required: true
    },
    sex : {
        type: String,
        required: true,
        enum : ['male', 'female', 'other', 'prefer_not_to_say']
    },
    memberTypeId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
     },
     level : {
        type: String,
        enum : {
            values : ['country', 'region', 'district', 'taluk', 'panchayat', 'ward'],
        }
     },
     userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
     },
     Status :  {
        type: String,
        default: 'Waiting Approval',
        enum: ['Approved',  'volunteer assigned', 'Waiting Approval', 'Rejected', 'under progress', 'case closed']
      }
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;