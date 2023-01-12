const order = require('../model/order_model');



exports.placedOrder = async(req,res) => {
    try{
    if(!req.params.cuestomerId){
        return res.status(401).json({
            message: "Cuestomer ID is Required to Palce  Order "
        })
    }else{
     const data = {
        cuestomerId: req.params.cuestomerId,
        shopName: req.body.shopName, 
        address: req.body.address, 
        hours: req.body.hours, 
        NoWorker: parseInt(req.body.NumberofWorker), 
        time: req.body.time, 
        desc: req.body.desc
     }
    const OrderPlaced = await order.create(data);
    res.status(200).json({
        message: "Your Order Placed ", 
        details: OrderPlaced, 
        sucess: true
    })
}
    }catch(err){
        res.status(400).json({
            message: err.message, 
            sucess: false
        })
    }
}


exports.UpdateplacedOrder = async(req,res) => {
    try{
    
    await order.findByIdAndUpdate({_id: req.params.id}, {
        cuestomerId: req.body.cuestomerId,
        shopName: req.body.shopName, 
        address: req.body.address, 
        hours: req.body.hours, 
        NoWorker: req.body.NumberofWorker, 
        time: req.body.time, 
        desc: req.body.desc
    });
    res.status(200).json({
        message: "Your Order Updated ", 
        sucess: true
    })
    }catch(err){
        res.status(400).json({
            message: err.message, 
            sucess: false
        })
    }
}


exports.GetOrderByCuestomerId = async(req,res) => {
    try{
    const data  = await order.findOne({cuestomerId: req.params.cuestomerId});
    if(!data){
        return res.status(401).json({
            message: "This Cuestomer is No Order "
        })
    }else{
        res.status(200).json({
            message: "Order - Details ", 
            details: data, 
            sucess: true
        })
    }
    }catch(err){
        res.status(400).json({
            message: err.message, 
            sucess: false
        })
    }
}


exports.GetOrderByOrderID = async(req,res) => {
    try{
    const data  = await order.findById({_id: req.params.orderId});
    if(!data){
        return res.status(401).json({
            message: "This Order Palced  this Order Id  "
        })
    }else{
        res.status(200).json({
            message: "Order - Details ", 
            details: data, 
            sucess: true
        })
    }
    }catch(err){
        res.status(400).json({
            message: err.message, 
            sucess: false
        })
    }
}

exports.DeleteOrderById = async(req,res) => {
    try{
     await order.findByIdAndDelete({_id: req.params.orderId});
        res.status(200).json({
            message: "Order - Deleted  ",  
            sucess: true
        })
    }catch(err){
        res.status(400).json({
            message: err.message, 
            sucess: false
        })
    }
}

exports.AllOrder = async(req,res) => {
    try{
    const data  = await order.find();
    if(data.length == 0){
        return res.status(401).json({
            message: "No Order "
        })
    }else{
        res.status(200).json({
            message: "Order - Details ", 
            details: data, 
            sucess: true
        })
    }
    }catch(err){
        res.status(400).json({
            message: err.message, 
            sucess: false
        })
    }
}