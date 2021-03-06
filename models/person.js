
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema({
  personname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Person= mongoose.model('Person', personSchema);

module.exports = Person;