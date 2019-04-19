const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const answerSchema = new Schema({
    answerScore: {
        type: Number

    },
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true }
);

module.exports = mongoose.model('Card', answerSchema);