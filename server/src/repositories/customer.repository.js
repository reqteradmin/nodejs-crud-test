const CustomerModel = require('./models/customer.model');

//all method related to database for Customer  
class CustomerRepository{

    //check with that email is there any customet in db
    async isExistEmail(newEmail){
        const emailExist = await CustomerModel.findOne({email:newEmail});
        return emailExist;
    }
}

module.exports = CustomerRepository;