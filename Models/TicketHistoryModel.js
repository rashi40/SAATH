const mongoose  = require('mongoose');
const validate = require('validator');

const ticketHistorySchema = new mongoose.Schema({
    timeStamp : {
        type : Date,
        required : true
    },
    action : String,
    actionBy : String,
    comments : String,
    document : String
});

const TicketHistory = mongoose.model('TicketHistory', ticketHistorySchema);

module.exports = TicketHistory;