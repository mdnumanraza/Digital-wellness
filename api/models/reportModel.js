const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ReportSchema = new Schema({

    rname: {
        type: String,
        required: true
    },

    ss: {
      type: String,
      required: true
    },

  descrip: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  }
 
}, { timestamps: true })

module.exports = mongoose.model('Reports',ReportSchema)