import mongoose from 'mongoose';

const { Schema } = mongoose;

const propertySchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  address: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  type: {
    type: String,
    trim: true,
    required: true,
    enum: ['Land', 'Building', 'Apartment'],
    default: 'Building',
  },
  leaseType: {
    type: String,
    trim: true,
    required: true,
    enum: ['Sale', 'Rent'],
    default: 'Sale',
  },
  images: {
    type: [String],
    required: true,
  },
  videoUrl: String,
  price: {
    required: true,
    type: Number,
  },
}, {
  timestamps: true,
});

const property = mongoose.model('Property', propertySchema);

export default property;
