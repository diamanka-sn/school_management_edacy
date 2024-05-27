const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;