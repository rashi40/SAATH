const mongoose  = require('mongoose');
const validate = require('validator');

const groupSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        maxlength : 30
    },
    groupType : {
        type : String,
        enum: ['Committee',  'Panel']
    },
    status :  {
        type: String,
        default: 'Waiting Approval',
        enum: ['Approved',  'volunteer assigned', 'Waiting Approval', 'Rejected', 'under progress', 'case closed']
      }
});

const Group = mongoose.model('Group', GroupSchema);

module.exports = Group;