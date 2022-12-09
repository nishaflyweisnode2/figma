const express = require("express");
const app = express();
const path = require("path");

var bodyParser = require('body-parser')

app.use(bodyParser.json())



const session = require('express-session');
require("./database/connection")
const port = process.env.PORT || 4001;


const labour = require("./route/labour_route");
const customer = require("./route/customer_route");
const customerwork = require("./route/customerwork_route");
const customerating = require("./route/customer_rating_route");
const startduty = require("./route/startduty_route");
const admin = require('./route/admin_route')




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



app.use(labour);
app.use(customer);
app.use(customerwork);
app.use(customerating);
app.use(startduty);
app.use(admin);

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})