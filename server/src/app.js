const express = require('express');
const customerRouter = require('./routes/customer.route');
const errorMiddleware = require('./middleware/error.middleware');
const mongoose = require("mongoose");

class App{
    constructor(){
        this.server = express();
        this.initializeMiddlewares();
        this.initializeDatabase();
        this.initializeRouters();
        this.initializeErrorhandling();
    }

    //All middlwares that must be applied at first must be called here
    initializeMiddlewares()
    {
        this.server.use(express.json());
    }

    //All main routes of api must be list here
    initializeRouters()
    {
        this.server.use('/customer',customerRouter)
    }


    /*
        Prepare connection to database with initialize connection string.
        Change connection string to your connection string.
    */
    async initializeDatabase(){
        await mongoose.connect("mongodb+srv://aazimi:eL9xbEi9GZSjiN9@cluster0.ow6pi.mongodb.net/testDB?retryWrites=true&w=majority");
    }

    //Error handling middleware will be called here.It must called last.
    initializeErrorhandling(){
        this.server.use(errorMiddleware);
    }

}

module.exports = new App().server;