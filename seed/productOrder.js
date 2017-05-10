const Sequelize = require('../models').Sequelize;
const productOrder = require('../models').productOrder;


productOrder.sync({force: true})
.then(()=> productOrder.bulkCreate([
  {
    ProductId: 1,
    OrderId: 1
  },
  {
    ProductId: 2,
    OrderId: 2
  },
  {
    ProductId: 3,
    OrderId: 3
  },
  {
    ProductId: 4,
    OrderId: 4
  },
  {
    ProductId: 5,
    OrderId: 5
  }
]))

.catch((err) => console.log(err));
