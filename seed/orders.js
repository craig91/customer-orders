const Sequelize = require('../models').Sequelize;
const Order = require('../models').Order;


Order.sync({force: true})
.then(()=> Order.bulkCreate([
  {
    CustomerId: 1
  },
  {
    CustomerId: 1
  },
  {
    CustomerId: 2
  },
  {
    CustomerId: 3
  },
  {
    CustomerId: 2
  }
]))

.catch((err) => console.log(err));
