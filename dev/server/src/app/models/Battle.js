import { Schema, model } from 'mongoose'

const BattleSchema = new Schema({
  heroName: String,
  classHero: String,
  dangerLevel: String,
  monsterName: String,
  active: Boolean,
  createdAt: Date,
  updatedAt: Date,
  latitude: Number,
  longitude: Number
})

export default model('Battle', BattleSchema)
