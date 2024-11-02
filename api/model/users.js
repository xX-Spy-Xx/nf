const conn = require('../connect');
const { Sequelize, DataTypes } = require('sequelize');
const users = conn.define('User',{
    userID:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement:true
    },
    Name:{
        type:DataTypes.STRING
    },
    Email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    confirmPassword:{
        type:DataTypes.STRING
    }
})
users.sync({alert:true});
module.exports = users;