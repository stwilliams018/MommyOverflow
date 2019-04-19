const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    catagory: {
        type: String,
        required: true,
    },
    Question: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Event', questionSchema);