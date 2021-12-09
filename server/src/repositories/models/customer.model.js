const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    firstName:String,
    lastName: String,
    dateOfBirth: Date,
    phoneNumber: {type :Number,required:true},
    email:{type :String ,required:true},
    bankAccountNumber : {type :String ,required:true}
});

module.exports = mongoose.model("Customer",CustomerSchema);