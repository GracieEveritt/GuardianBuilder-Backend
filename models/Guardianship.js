const mongoose = require('mongoose');

const GuardianshipSchema = mongoose.Schema({
    createdby: {
        ref: "Account",
        type: mongoose.Schema.Types.ObjectId
    },
    draft: {
        type: Boolean
    }, 
    final: {
        type: Boolean
    },
    parents: [{
        ref: "Parent",
        type: mongoose.Schema.Types.ObjectId
    }],
    children: [{
        ref: "Child",
        type: mongoose.Schema.Types.ObjectId
    }],
    limitations: {
        type: String,
    },
    guardians: [{
        ref: "Guardian",
        type: mongoose.Schema.Types.ObjectId,
        index: true
    }],   
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('guardianship', GuardianshipSchema);