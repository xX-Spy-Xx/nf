const {Sequelize}=require("sequelize")
const sequelize = new Sequelize('Netflix', 'postgres', 'yinanw2003', {
    host: 'localhost',
    dialect: 'postgres',
    port: '2546',
    logging:false
  });

module.exports=sequelize