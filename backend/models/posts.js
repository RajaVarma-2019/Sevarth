const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
  profileId: { type: String, required: true },
  serviceName: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  drug: { type: String },
  rooms: { type: Number },
  persons: { type: Number },
  groceries: { type: Boolean },
  status: { type: String },
  empId: { type: String }
});




module.exports = mongoose.model('Service', serviceSchema);

