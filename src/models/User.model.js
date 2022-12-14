const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  email: {
    required: true,
    unique: true,
    type: String,
    min: 6,
    max: 1024
  },
  password: {
    required: true,
    type: String,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("User", userSchema)
