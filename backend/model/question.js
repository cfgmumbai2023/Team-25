const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    questionBody: {
        type: String
    },
    postedBy: {
        type: mongoose.Types.ObjectId, 
        ref:"User"
    },
    videoId: {
        type: mongoose.Types.ObjectId,
        ref: "Video"
    }
},
{ timestamps : true}
);

module.exports = mongoose.model("Question", questionSchema);