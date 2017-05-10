const Sequelize = require('../models').Sequelize;
const Product = require('../models').Product;

Product.sync({force: true})
.then(()=> Product.bulkCreate([
  {
    name: "Tims",
    description: "constructions boots",
    cost: 100
  },
  {
    name: "HP Laptop",
    description: "overheats too much",
    cost: 150
  },
  {
    name: "Samsung TV",
    description: "4k ultra bright",
    cost: 500
  },
  {
    name: "Sun Microsystems Workstation",
    description: "Before oracle messed it all up, vintage",
    cost: 300
  },
  {
    name: "neXT STEP workstation",
    description: "Tim berners made the first website on this..",
    cost: 100
  }
]))

.catch((err) => console.log(err));
