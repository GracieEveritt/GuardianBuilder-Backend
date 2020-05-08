const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    }, 
    middle_name: {
        type: String
    },
    last_name: {
        type: String,
        required: true
    },
    suffix: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        validate: {
            validator: function(v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number`
        },
        required: [true, 'Phone number is required']
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('account', AccountSchema);