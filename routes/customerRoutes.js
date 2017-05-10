const router = require('express').Router();
const Customer = require('../models').Customer;

function getAllCustomers(req, res) {
  Customer.findAll({}).then(function(data) {
    res.send(data)
  }).catch(function(error) {
    console.log('error', error)
    res.sendStatus(500)
  })
}

function getOneCustomer(req, res){
  Customer.findById(
    req.params.id
  ).then(function(oneCustomer) {
    res.send(oneCustomer)
  }).catch((err) => console.log('one customer', error))
}

router.route('/')
.get(getAllCustomers)

router.route('/:id')
.get(getOneCustomer)
