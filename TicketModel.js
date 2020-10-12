const mongoose  = require('mongoose');
const validate = require('validator');

const ticketSchema = new mongoose.Schema({
    ticketStamp :{
        type: Date,
        default: Date.now
    },
    category: {
        type: String
    },
    subscriberId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subscriber"
    },
    assignedTo : String,
    status : {
        type: String,
        default: 'Waiting Approval',
        enum: ['Approved',  'volunteer assigned', 'Waiting Approval', 'Rejected', 'under progress', 'case closed']
      }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;