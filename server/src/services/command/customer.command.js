const parsePhoneNumber = require('libphonenumber-js');
const PhoneNumberFormatIsInvalidException = require('../../exceptions/PhoneNumberFormatIsInvalid.exception');
const CustomerWithEmailIsAlreadyTakenException = require('../../exceptions/CustomerWithEmailIsAlreadyTaken.exception');
const CustomerRepository = require('../../repositories/customer.repository');

    //Business logic and validation for Customer will be defined here
class CustomerCommand{

    Create(createCustomerDto){
        //validation phone number to be valid mobile number using google lib
        //Default country is Sweden,If you wanto to change country you must pass country code as CDLR standard
        const phoneNumber=parsePhoneNumber(createCustomerDto.PhoneNumber,'SE');
        if(phoneNumber.isValid() === false){
            throw new PhoneNumberFormatIsInvalidException(createCustomerDto.PhoneNumber);
        }
        const customerRepository=new CustomerRepository();
        if(customerRepository.isExistEmail)
            throw new CustomerWithEmailIsAlreadyTakenException(createCustomerDto.email);
    }
}

module.exports = CustomerCommand;