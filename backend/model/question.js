const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    questionTitle: {
        type: String
    },
    questionBody: {
        type: String
    },
    postedBy: {
        type: mongoose.Types.ObjectId, 
        ref:"User"
    },
    likeCount: {
        type: Number, 
        default: 0
    },
    likedBy: [
        {
            type: mongoose.Types.ObjectId, 
            ref:"User"        
        }
    ]
},
{ timestamps : true}
);

module.exports = mongoose.model("Question", questionSchema);