startdutymodel = require('../model/startmyduty_model')


const createstartduty = (req, res) => {
    const d = new Date();
    let starttime = d.toLocaleString();
    const workid = req.body.workid;
    const labourid = req.body.labourid;
    const endduty = req.body.endduty;

    const startduty = new startdutymodel({
        starttime: starttime,
        workid: workid,
        labourid: labourid,
        endduty: endduty
    })
    startduty.save().then((result) => {
        const response = {
            StatusCode: 200,
            Status: 'sucess',
            message: 'duty start',
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

        });
}


const postendduty = (req, res) => {
    const dutyid = req.params._id;
    const d = new Date();
    const endtime = d.toLocaleString();
   
    startdutymodel.findById(dutyid).then((result) => {

        result.endtime = endtime;
       

        return result.save().then((data) => {
            res.status(200).json({
                StatusCode: 200,
                Status: 'success',

                message: 'End duty',
                status: 'success',
                customer: data,

            })
        })
    })
}


const getstartduty = (req, res) => {
    const workid = req.params.workid;
    startdutymodel.find({workid:workid, isdeleted: false }).then((data) => {
        const response = {
            StatusCode: 200,
            Status: 'sucess',
            message: 'get start duty',
            work: data,
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


module.exports = { createstartduty, postendduty,getstartduty }
