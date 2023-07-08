const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['coach', 'instructor'],
    },
    mobile: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    sports: [
      {
        type: String,
      },
    ],
    yearOfExperience: {
      type: Number,
    },
    certificate: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
