import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },

}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

const Customer = mongoose.model('Customer', schema);
export default Customer;
