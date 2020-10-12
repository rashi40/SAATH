const mongoose  = require('mongoose');
const validate = require('validator');

const groupMemberSchema = new mongoose.Schema({
    committeeId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group"
    },
    memberId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member"
    }
});

const GroupMember = mongoose.model('GroupMember', groupMemberSchema);

module.exports = GroupMember;