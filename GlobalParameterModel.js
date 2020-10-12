const mongoose  = require('mongoose');
const validate = require('validator');

const globalParameterSchema = new mongoose.Schema({
    tag : {
        type: String,
        required: true,
        unique: true,
        maxlength: 30
    },
    value : {
        type: String,
        maxlength: 50
    }
});

const GlobalParameter = mongoose.model('GlobalParameter', globalParameterSchema);

module.exports = GlobalParameter;