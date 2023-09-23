const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PostSchema = new Schema({
  img: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: false
  },
  uname: {
    type: String,
    required: false
  },
  profile: {
    type: String,
    required: false
  }
}, { timestamps: true })

module.exports = mongoose.model('Posts',PostSchema)