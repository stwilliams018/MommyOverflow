const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const answerSchema = new Schema({
    question: {
        type: Schema.Types.ObjectId,
        ref:'Question'
    },
    answer: {
        type: String,
        required:true
    },
    score: {
        type: Number,
        required:true
    },
    user: {
        type:Schema.Types.ObjectId,
        ref:'User'
    }
}, {timestamps:true}
);

module.exports = mongoose.model('Answer',answerSchema);