const router = require('express').Router();

router.use('/customers', require('./customerRoutes.js'));
router.use('/orders', require('./orderRoutes.js'));
router.use('/products', require('./productRoutes.js'));

module.exports = router;
