
customermodel = require('../model/customer_model')
const sha256 = require('sha256');

const customersigninupbymobilenumber = (req, res) => {
    const mobilenumber = req.body.mobilenumber;
    const usertype = "customer";
     const emailid = req.body.emailid;

    customermodel.find({mobilenumber:mobilenumber , isdeleted: false }).then((resp) => {
        if (resp.length > 0) {
            res.status(200).json({
                StatusCode: 200,
                Status: 'exsist',
                data: {
                    message: 'In this mobile no. customer already exsist',
                    status: 'exsist'
                }
            })
        }else {
            const customer = new customermodel({
               
                mobilenumber: mobilenumber,
                usertype:usertype,
                 emailid:emailid

            });
            customer.save().then((result) => {
                const response = {
                    StatusCode: 200,
                    Status: 'sucess',
                    message: 'customer mobileno. reg sucessfully',
                    user: result,
                }
                res.send(response)
            })
                .catch((err) => {
                    console.log(err)
                    res.send({
                        status: 400,
                        error: err.message,
                    })
                })

        }

    })


}




// const customersignup = (req, res) => {
//     const fullname = req.body.fullname;
//     const shopname = req.body.shopname;
//     const livelocation = req.body.livelocation;
//     const emailid = req.body.emailid;

//     const typeofshop = req.body.typeofshop;
//     const shopaddress = req.body.shopaddress;
//     const gstnumber = req.body.gstnumber;
//     const password = sha256(req.body.password);
//     const usertype = "customer";
//     customermodel.find({ emailid: emailid, isdeleted: false }).then((resp) => {
//         if (resp.length > 0) {
//             res.status(200).json({
//                 StatusCode: 200,
//                 Status: 'exsist',
//                 data: {
//                     message: 'In this mobile no. customer already exsist',
//                     status: 'exsist'
//                 }
//             })
//         }
//         else {
//             const customer = new customermodel({
//                 fullname: fullname,
//                 shopname: shopname,
//                 livelocation: livelocation,
//                 typeofshop: typeofshop,
//                 emailid: emailid,

//                 shopaddress: shopaddress,
//                 gstnumber: gstnumber,
//                 password: password,
//                 usertype: usertype
//             });
//             customer.save().then((result) => {
//                 const response = {
//                     StatusCode: 200,
//                     Status: 'sucess',
//                     message: 'customer Signup sucessfully',
//                     user: result,
//                 }
//                 res.send(response)
//             })
//                 .catch((err) => {
//                     console.log(err)
//                     res.send({
//                         status: 400,
//                         error: err.message,
//                     })
//                 })

//         }

//     })


// }


const customersignin = (req, res) => {
    const mobilenumber = req.body.mobilenumber;
    // const password = sha256(req.body.password);

    customermodel.find({ mobilenumber: mobilenumber, isDeleted: false, usertype: "customer" })
        .then((result) => {
            if (result.length > 0) {
                req.session.customerdetails = {
                    customerid: result[0]._id,
                    customerfullname: result[0].fullname,
                    customermobilenumber: result[0].mobilenumber,
                    customerlivelocation: result[0].livelocation,
                    customershopaddress: result[0].shopaddress,
                    customerusertype: result[0].usertype,
                    customershopname: result[0].shopname,
                    customeremailid: result[0].emailid,
                    customertypeofshop: result[0].typeofshop,
                    customerusertype: result[0].usertype,
                    customergstnumber: result[0].gstnumber,
                }
                console.log(req.session.customerdetails);
                res.status(200).json({
                    StatusCode: 200,
                    Status: 'success',
                    data: {
                        message: ' login  successfully',
                        status: ' Log in success',
                        customerdetails: result,
                    }
                })
            }
            else {
                res.status(200).send('user not found');
            }
        })

}


const customerprofilegetbyid = (req, res) => {
    const customerid = req.params._id;

    customermodel.findById(customerid).then((result) => {
        const response = {
            StatusCode: 200,
            Status: 'sucess',
            message: 'Get customer profile successfully',
            user: result,
        }
        res.send(response)
    })
        .catch((err) => {
            console.log(err)
            res.send({
                status: 400,
                error: err.message,
            })
        })
}


const updatecustomerdetails = (req, res) => {
    const customerid = req.params._id;
    const fullname = req.body.fullname;
    const shopname = req.body.shopname;
    const livelocation = req.body.livelocation;
    const emailid = req.body.emailid;
   
    const typeofshop = req.body.typeofshop;
    const shopaddress = req.body.shopaddress;
    const gstnumber = req.body.gstnumber;

    customermodel.findById(customerid).then(result => {
        result.fullname = fullname;
        
        result.shopaddress = shopaddress;
        result.shopname = shopname;
        result.livelocation = livelocation;
        result.emailid = emailid;
        result.typeofshop = typeofshop;
        result.gstnumber = gstnumber;
        return  result.save().then((result) => {
           
                const response = {
                    StatusCode: 200,
                    Status: 'sucess',
                    message: 'customer mobileno. reg sucessfully',
                    user: result,
                }
                res.send(response)
            })
                .catch((err) => {
                    console.log(err)
                    res.send({
                        status: 400,
                        error: err.message,
                    })
                })
        })
    

}

const customerlogout = async (req, res) => {
    try {
        req.session.destroy();
        res.status(200).json({
            StatusCode: 200,
            Status: 'success',
            message: 'logout success',
            status: 'success',

        })
    } catch (error) {
        console.log(error.message);
    }

}











module.exports = { customersigninupbymobilenumber, customersignin, customerprofilegetbyid, updatecustomerdetails, customerlogout }