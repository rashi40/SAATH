const mongoose  = require('mongoose');
const validate = require('validator');

const memberTypeIdSchema = new mongoose.Schema({
    description : {
        type: String,
        trim: true,
        maxlength : 30
    },
    Status : {
        type: String,
        default: 'Waiting Approval',
        enum: ['Approved',  'volunteer assigned', 'Waiting Approval', 'Rejected', 'under progress', 'case closed']
      }
});

const MemberTypeId = mongoose.model('MemberTypeId', memberTypeIdSchema);

module.exports = MemberTypeId;