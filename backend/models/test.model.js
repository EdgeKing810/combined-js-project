const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
}, {
  timestamps: true,
});

const Test = mongoose.model('Test', testSchema);
module.exports = Test;
