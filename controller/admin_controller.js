

customermodel = require('../model/customer_model')
labourmodel = require('../model/labour_model')
customerworkmodel = require("../model/customer_work_model.js")
adminmodel = require("../model/admin_model");
const sha256 = require('sha256');



const adminsignup = (req, res) => {

    const emailid = req.body.emailid;
    const password = sha256(req.body.password);
    const usertype = "admin";
    adminmodel.find({ emailid: emailid, isdeleted: false }).then((resp) => {
        if (resp.length > 0) {
            res.status(200).json({
                StatusCode: 200,
                Status: 'exsist',
                data: {
                    message: 'In this emaid admin already exsist',
                    status: 'exsist'
                }
            })
        }
        else {
            const admin = new adminmodel({
                emailid: emailid,
                password: password,
                usertype: usertype
            });
            admin.save().then((result) => {
                const response = {
                    StatusCode: 200,
                    Status: 'sucess',
                    message: 'admin Signup sucessfully',
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

    });


};

const adminsignin = (req, res) => {
    const emailid = req.body.emailid;
    const password = sha256(req.body.password);
    adminmodel.find({ emailid: emailid, password: password, usertype: "admin" }).then((result) => {
        if (result.length > 0) {
            req.session.admindetails = {
                adminid: result[0]._id,
                adinmailid: result[0].emailid,
            }
            console.log(req.session.admindetails);
            res.status(200).json({
                StatusCode: 200,
                Status: "seccess",
                data: {
                    message: "login success",
                    status: "success",
                    admin: result
                }
            })

        } else {
            res.status(200).send('user not found');
        }
    })

}


const admingetallcustomer = (req, res) => {
    customermodel.find({ isdeleted: false }).then((result) => {
        const response = {
            StatusCode: 200,
            Status: 'sucess',
            message: 'Admin get all customer successfully.',
            customer: result,
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

const admingetcustomerbyid = (req, res) => {
    const _id = req.params._id;
    customermodel.find({ _id: _id, isdeleted: false }).then((result) => {
        const response = {
            StatusCode: 200,
            Status: 'sucess',
            message: 'Admin get  customer by id successfully.',
            customer: result,
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

const admingetalllabour = (req, res) => {
    labourmodel.find({ isdeleted: false }).then((result) => {
        const response = {
            StatusCode: 200,
            Status: 'sucess',
            message: 'Admin get all labour successfully.',
            customer: result,
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


const admingetlabourbyid = (req, res) => {
    const _id = req.params._id;
    labourmodel.find({ _id: _id, isdeleted: false }).then((result) => {
        const response = {
            StatusCode: 200,
            Status: 'sucess',
            message: 'Admin get labour by id successfully.',
            customer: result,
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

const admingetallwork = (req, res) => {
    customerworkmodel.find({ isdeleted: false }).then((result) => {
        const response = {
            StatusCode: 200,
            Status: 'sucess',
            message: 'Admin get all work successfully.',
            customer: result,
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


const admingetworkbyworkid = (req, res) => {
    const _id = req.params._id;
    customerworkmodel.find({ _id: _id, isdeleted: false }).then((result) => {
        const response = {
            StatusCode: 200,
            Status: 'sucess',
            message: 'Admin get work by id successfully.',
            customer: result,
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





module.exports = { admingetallcustomer, admingetalllabour, admingetcustomerbyid, admingetlabourbyid, admingetallwork, admingetworkbyworkid, adminsignup ,adminsignin}



