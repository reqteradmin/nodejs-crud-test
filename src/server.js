const express = require('express');
const bodyParser = require('body-parser');
const customerRouter = require('./routes/customer.route');
const errorMiddleware = require('./middleware/error.middleware');


const app = express();
app.use(express.json());

app.use('/',customerRouter)
app.use(errorMiddleware);

app.listen(4000,()=>{
    console.log("app listening on port 4000");
});