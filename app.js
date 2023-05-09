const express = require("express");
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const serverless = require('serverless-http')

var bodyParser = require('body-parser')
require('dotenv').config()
app.use(cors());
app.use(bodyParser.json())



const session = require('express-session');





const labour = require("./route/labour_route");
const customer = require("./route/customer_route");
const customerwork = require("./route/customerwork_route");
const customerating = require("./route/customer_rating_route");
const startduty = require("./route/startduty_route");
const admin = require('./route/admin_route')
const privacy = require('./route/privacy_router')
const contact = require('./route/contact');
const payment = require('./route/payment_router');
const order = require('./route/order_router');
const notify = require('./route/notify_router')
const banner = require('./route/banner');
const terms = require('./route/terms');
const active = require('./route/active_users')
const invoice = require('./route/invoice_router')




app.use(express.json());
const staticpath = path.join(__dirname, "./public");

app.use(express.static(staticpath));
app.use(express.static('images'));
app.use(express.urlencoded({ extended: true }));
app.use(
    session(
            {
                resave: true ,
                secret: '123456' ,
                saveUninitialized: true
            }   
        )
    );

app.get('/', (req,res) =>{
        res.status(200).json({
            message: "Working"
        })
})

app.use(labour);
app.use(customer);
app.use(customerwork);
app.use(customerating);
app.use(startduty);
app.use(admin);
app.use(privacy);
app.use(contact);
app.use(payment);
app.use(order);
app.use(notify);
app.use(banner);
app.use(terms);
app.use(active);
app.use(invoice)

app.all('*', (req, res, next) => {
    return res.status(404).json({
        message: "Path does not exists"
    })

})

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    if (err.status) {
        console.log(err);
        console.log('error middleware');
        return res.status(err.status).json({
            msg: err.message
        })

    } else {

        console.log(err);
        console.log('error middleware status not given');
        return res.status(500).json({
            msg: err.message
        })
    }

})


mongoose.connection.on('connected', () => console.log('connected'));
mongoose.connection.on('disconnected', () => console.log('disconnected'));
mongoose.connection.on('error', (error) => console.log(error));



app.listen(4001, async() => {
    await mongoose.connect(process.env.DATABASE || "mongodb+srv://spherex:spherex@cluster0.witlisi.mongodb.net/spherex?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

})

module.exports = {
    handler: serverless(app)
}