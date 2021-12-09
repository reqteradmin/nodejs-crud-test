class CustomerController{
    constructor(){
        
    }
    Create(req,res,next){
        res.send('Hi Post');
    }

    GetAll(req,res,next){
        res.send('Get');
    }
}

module.exports = CustomerController;

