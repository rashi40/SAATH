const mongoose  = require('mongoose');
const validate = require('validator');

const ticketDocumentSchema = new mongoose.Schema({
    ticketId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket"
    },
    documentUrl : String
});

const TicketDocument = mongoose.model('TicketDocument', ticketDocumentSchema);

module.exports = TicketDocument;