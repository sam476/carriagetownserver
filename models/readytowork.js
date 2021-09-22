const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);

const readytoworkSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    unique: true
  },
  lastname: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
},
  {
    timestamps: true,
  });

const Readytowork = mongoose.model('Readytowork', readytoworkSchema);

module.exports = Readytowork;