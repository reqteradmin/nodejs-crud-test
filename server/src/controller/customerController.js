//This class is reponsible for controlling API interaction for Customer
class CustomerController{
    constructor(){
        
    }
    //Creating customer. Req parameter must have definition accordind to dto/create.customer.dto
    Create(req,res,next){
        res.send('Hi Post');
    }

    //Returns all cutomers that exist in storage
    GetAll(req,res,next){
        res.send('Get');
    }
}

module.exports = CustomerController;

