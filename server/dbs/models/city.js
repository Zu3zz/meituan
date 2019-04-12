import mongoose from 'mongoose'
const Schema = mongoose.Schema
const City = new Schema({
  id: {
    type: String,
    unique: true
  },
  value: {
    type: Array,
    require: true
  }
})

export default mongoose.model('City', City)
