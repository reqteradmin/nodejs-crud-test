const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Person
let Person = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  date_of_birth: {
    type: Number
  },
  phone_number: {
    type: String
  },
  email: {
    type: String
  },
  bank_account_number: {
    type: Number
  }
},{
    collection: 'person'
});

module.exports = mongoose.model('person', Person);