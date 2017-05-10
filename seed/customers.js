const Sequelize = require('../models').Sequelize;
const Customer = require('../models').Customer;

Customer.sync({force: true})
.then(()=> Customer.bulkCreate([
  {
    email: "charles@gmail.com",
    password: "123",

  },
  {
    email: "nate@gmail.com",
    password: "123",

  },
  {
    email: "brian@gmail.com",
    password: "123",

  },
  {
    email: "steve@gmail.com",
    password: "123",

  },
  {
    email: "elle@gmail.com",
    password: "123",

  }
]))

.catch((err) => console.log(err));
