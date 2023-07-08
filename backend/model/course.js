const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String
    },
    description: {
        type: String
    },
    instructorId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
},
{ timestamps : true}
);

module.exports = mongoose.model("Course", courseSchema);