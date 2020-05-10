const mongoose = require('mongoose');

const ChildSchema = mongoose.Schema({
    createdby: {
        ref: "Account",
        type: mongoose.Schema.Types.ObjectId
    },
    first_name: String,
    last_name: String,
    dob: {
        type: Date
    },
    parents: [{
        ref: "Parent",
        type: mongoose.Schema.Types.ObjectId
    }],
    created: {
        type: Date,
        default: Date.now
    },    
    updated: {type: Date, default: Date.now}
});

module.exports = mongoose.model('child', ChildSchema);