import mongoose from 'mongoose';

const { Schema } = mongoose;

const { ObjectId } = mongoose.Types;
ObjectId.prototype.valueOf = function () { // eslint-disable-line
  return this.toString();
};

const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  imageUrl: String,
}, {
  timestamps: true,
});

const user = mongoose.model('User', userSchema);

export default user;
