const mongoose = require('mongoose');

const empSchema = mongoose.Schema({
  empName: {type: String},
  empAge: {type: Number},
  empGender: {type: Number},
  empCook: {type: Number},
  empClean: {type: Number},
  empPhar: {type: Number},
  status: { type: Number },
});




module.exports = mongoose.model('Employee', empSchema);
