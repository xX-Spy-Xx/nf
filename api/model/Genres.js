const conn = require('../connect');
const { Sequelize, DataTypes } = require('sequelize');
const Genres = conn.define('Genres',{
    GenresID:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement:true
    },
    GenresName:{
        type:DataTypes.STRING
    }
})
Genres.sync({alert:true});
module.exports = Genres;