const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    title: {
        type: String
    },
    url: {
        type: String
    },
    questionsList: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Question'
        }
    ]
});

module.exports = mongoose.model("Video", videoSchema);