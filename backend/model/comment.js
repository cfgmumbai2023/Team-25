const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment: {
        type: String
    },
    commentedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    questionId: {
        type: mongoose.Types.ObjectId,
        ref: "Question"
    }
},
{ timestamps : true}
);

module.exports = mongoose.model("Comment", commentSchema);