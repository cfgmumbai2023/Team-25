const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseTitle: {
        type: String
    },
    description: {
        type: String
    },
    instructorId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    category: {
        type: String
    },
    rating: {
        type: Number,
        default: 0
    },
    thumbnail: {
        type: String,
    },
    duration: {
        type: Number
    },
    numberOfModule: {
        type: Number
    },
    videoUrl: {
            type: mongoose.Types.ObjectId,
            ref: 'Video'
    },
},
{ timestamps : true}
);

module.exports = mongoose.model("Course", courseSchema);