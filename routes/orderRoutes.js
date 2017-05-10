const router = require('express').Router();
const Customer = require('../models').Customer;
const Order = require('../models').Order;

function allOrders(req, res) {
  Order.findAll({}).then(function(data) {
    res.send(data)
  }).catch(function(error) {
    console.log('error', error)
    res.sendStatus(500)
  })
}
//
// function oneOrder(req, res) {
//   Order.findById(req.params.id, {
//     include: [Customer]
//   })
//   .then(function(oneOrder) {
//     res.send(oneOrder)
//   })
//   .catch((err) => console.log('one order', error))
// }


function createOrder(req, res) {
  Order.create({
    CustomerId: req.body.CustomerId
  }).then(function(newOrder) {
    res.send(newOrder)
  })
}

router.route('/:CustomerId')
.get(allOrders)

router.route('/')
.post(createOrder)
