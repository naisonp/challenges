import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
  login: {
    type: String,
    unique: true
  },
  password: String
});

UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 8);
  next();
});

export default model('User', UserSchema);
