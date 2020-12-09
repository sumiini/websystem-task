const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    movie_name: {
        type: String,
        required: true,
    },
    review_content: {
        type: String,
        required: true,
    },
    rate: Number,
    date: { type: Date, default: Date.now },
});

const reviewModel = model('Review', reviewSchema);

module.exports = reviewModel;