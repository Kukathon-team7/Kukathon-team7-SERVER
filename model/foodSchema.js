const mongoose = require('mongoose');

const { Schema } = mongoose;
const food = new Schema({
  name: {
    type: String,     // 자료형
    required: true,   // 필수 여부
    unique: true,     // 고유 값
  },
  ordinary_date: {
    type: Number,
    required: true,

  },
  freeze_date: {
    type: Number,
    required: true,

  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Food', food);