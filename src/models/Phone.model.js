const { Schema, model } = require("mongoose")

const phoneSchema = new Schema({
  id: {
    required: true,
    type: Number
  },
  name: {
    required: true,
    type: String
  },
  manufacturer: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  color: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: Number
  },
  imageFileName: {
    required: true,
    default: "https://res.cloudinary.com/phector27/image/upload/v1664961201/iPhone-14-PNG-Transparent_ncxit9.png",
    type: String
  },
  screen: {
    required: true,
    type: String
  },
  processor: {
    required: true,
    type: String
  },
  ram: {
    required: true,
    type: Number
  },
  active: {
    default: true,
    type: Boolean,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = model("Phone", phoneSchema)
