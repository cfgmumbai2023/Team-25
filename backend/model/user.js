const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required
    },
    lastName: {
        type: String,
        required
    },
    email: {
        type: String,
        requred
    },
    type: {
        type: String,
        enum: ["coach", "instructor"]
    },
    mobile: {
        type: String
    },
    password: {
        type: String,
        requried
    },
    sports: [
        {
            type: String
        }
    ],
    yearOfExperience: {
        type: Number
    },
    certificate: [
        {
            type: string
        }
    ]
},
{ timestamps : true}
);

module.exports = mongoose.model("User", userSchema);