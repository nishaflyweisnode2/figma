


customerworkmodel = require("../model/customer_work_model.js")
labourmodel = require('../model/labour_model')

const customercreatework = (req, res) => {

    if (req.session.customerdetails != null || req.session.customerdetails != undefined) {
        if (req.session.customerdetails.customerusertype == 'customer') {
            const customerid = req.session.customerdetails.customerid;
            const shopname = req.body.shopname;
            const address = req.body.address;
            const noofhours = req.body.noofhours;
            const noofworkers = req.body.noofworkers;
            const sheduletime = req.body.sheduletime;
            const paymentstatus = "pending";
            const workdescription = req.body.workdescription;
            const d = new Date();
            let createdateandtime = d.toLocaleString();
            const customer = new customerworkmodel({
                customerid: customerid,
                shopname: shopname,
                address: address,
                noofhours: noofhours,
                noofworkers: noofworkers,
                sheduletime: sheduletime,
                paymentstatus:paymentstatus,
                workdescription: workdescription,
                status: [
                    {

                        workcreatedateandtime: d.toLocaleString()
                    }
                ],
                
                createdateandtime: createdateandtime

            });
            customer.save().then((result) => {
                const response = {
                    StatusCode: 200,
                    Status: 'sucess',
                    message: 'customer work create sucessfully',
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




        } else {
            res.send('you are not a customer')
        }

    } else {
        res.send('you should login first')
    }

}

const getworkbyid = (req, res) => {
    const workid = req.params._id;

    customerworkmodel.findById(workid).then((result) => {
        const response = {
            StatusCode: 200,
            Status: 'sucess',
            message: 'Get work by workid successfully.',
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

const extendwork = (req, res) => {
    const customerid = req.session.customerdetails.customerid;
    const workid = req.params._id;
    const shopname = req.body.shopname;
    const address = req.body.address;
    const sheduletime = req.params.sheduletime;
    const workdescription = req.body.workdescription;
    const d = new Date();
    const extendworkinminuite = req.body.extendworkinminuite;
    const extendworkstatus = 'pending';
    const extendworkpaymentstatus = 'pending'; 
   
    customerworkmodel.findById(workid).then((result) => {
        
        result.customerid = customerid;
        result.shopname = shopname;
        result.address = address;
        result.sheduletime = sheduletime;
        result.workdescription = workdescription;
        result.extendworkinminuite = extendworkinminuite;
        result.extentdworkmessage="Start Extend Work"
        result.isextended = 'true'
        let extendedworkstatus = [];
        extendedworkstatus = result.extendedworkstatus;
        extendedworkstatus.push({

            extendminuits: req.body.extendworkinminuite,
            dateandtime: d.toLocaleString()
        })
        result.extendworkstatus=extendworkstatus;
        result.extendworkpaymentstatus =extendworkpaymentstatus;

      

        return result.save().then((data) => {
            res.status(200).json({
                StatusCode: 200,
                Status: 'success',

                message: 'Extend work successfully',
                status: 'success',
                customer: data,

            })
        })
    })
}


const getextendworkbyworkid = (req, res) => {
    const workid = req.params._id;

    customerworkmodel.findById(workid).then((result) => {
        const response = {
            StatusCode: 200,
            Status: 'sucess',
            message: 'Get Extend work by workid successfully.',
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


const getworkhistorybyworkid = (req, res) => {
    const workid = req.params._id;
    customerworkmodel.findById(workid).then((result) => {
        const response = {
            StatusCode: 200,
            Status: 'sucess',
            message: 'Get Extend work by workid successfully.',
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

















module.exports = { customercreatework, getworkbyid, extendwork, getextendworkbyworkid,getworkhistorybyworkid }