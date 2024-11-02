const conn = require('../connect');
const { Sequelize, DataTypes } = require('sequelize');
const Movie = conn.define('Movie',{
    MovieID:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement:true
    },
    Title:{
        type:DataTypes.STRING
    },
    Genres:{
        type:DataTypes.STRING
    },
    Season:{
        type:DataTypes.STRING
    },
    Section:{
        type:DataTypes.STRING
    },
    Duration:{
        type:DataTypes.STRING
    },
    Director:{
        type:DataTypes.STRING
    }
})
Movie.sync({alert:true});
module.exports = Movie;