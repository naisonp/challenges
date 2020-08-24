import { Schema, model } from 'mongoose'

const HeroSchema = new Schema({
  name: String,
  class: String,
  latitude: Number,
  longitude: Number,
  allocated: {
    type: Boolean,
    required: false,
    default: false
  }
})

export default model('Hero', HeroSchema)
