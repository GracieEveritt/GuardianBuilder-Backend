const mongoose = require('mongoose');

const ParentSchema = mongoose.Schema({
    createdby: {
        ref: "Account",
        type: mongoose.Schema.Types.ObjectId
    },
    children: [{
        ref: "Child",
        type: mongoose.Schema.Types.ObjectId
    }],
    deceased: Boolean,
    first_name: String,
    middle_name: String,
    last_name: String,
    suffix: String,
    birth_parent: {Boolean, default: true},
    adoptee_parent: {Boolean, default: false},
    created: {
        type: Date,
        default: Date.now
    }    
});

module.exports = mongoose.model('parent', ParentSchema);

