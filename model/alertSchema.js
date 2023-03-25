const mongoose = require('mongoose');

const { Schema } = mongoose;

const alert = new Schema({
  name: {
    type: String,     // 자료형
    required: true,   // 필수 여부
    unique: true,     // 고유 값
  },
  expiration_date: {
    type: Date,
    required: true,
    default: Date.now

  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Alert', alert);