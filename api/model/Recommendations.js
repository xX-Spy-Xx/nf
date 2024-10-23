const conn = require('../connect');
const { Sequelize, DataTypes } = require('sequelize');
const Recommendations = conn.define('Recommendations',{
    RacID:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement:true
    },
    UserID:{
        type:DataTypes.INTEGER
    },
    MovieID:{
        type:DataTypes.INTEGER
    },
    Comment:{
        type:DataTypes.STRING
    }
})
Recommendations.sync({alert:true});
module.exports = Recommendations;