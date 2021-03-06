const mongoose = require('mongoose');

const GuardianSchema = mongoose.Schema({
    createdby: {
        ref: "Account",
        type: mongoose.Schema.Types.ObjectId
    },
    children:[{
        ref: "Child",
        type: mongoose.Schema.Types.ObjectId
    }],
    married: Boolean,
    spouse: String,
    relationToParent: String,
    first_name: String,
    middle_name: String,
    last_name: String,
    suffix: String,
    address:{
        street: String,
        city: String,
        state: String,
        zipcode: Number
    },
    divorced: {Boolean, default: false},
    deceased: {Boolean, default: false},
    primary: Boolean,
    rank: Number,
    ifpredecease: String,
    ifdivorce: String,
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    } 
});

module.exports = mongoose.model('guardian', GuardianSchema);