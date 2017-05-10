const router = require('../models').Router()
const productOrder = require('../models').productOrder
const Product = require('../models').Product


function getAllProducts(req, req) {
  Product.findAll({}).then().then(function(data) {
    res.send(data)
  }).catch(function(error) {
    console.log('error', error)
    res.sendStatus(500)
  })
}

function postProduct(req, res) {
  Product.create({
    name: req.body.name,
    description: req.body.description,
    cost: req.body.cost
  }).then(function(newProduct) {
    console.log(newProduct)
    res.send(newProduct)
  })
}

router.route('/:OrderId')
.get(getAllProducts)

router.route('/')
.post(postProduct)
