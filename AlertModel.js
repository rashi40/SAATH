const mongoose  = require('mongoose');
const validate = require('validator');

const alertSchema = new mongoose.Schema({
    timeStamp : {
        type: Date,
        required: true
    },
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    description : {
        type: String,
        trim: true,
        maxlength : 60
    },
    status :  {
        type: String,
        default: 'Waiting Approval',
        enum: ['Approved',  'volunteer assigned', 'Waiting Approval', 'Rejected', 'under progress', 'case closed']
      }
});

const Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;