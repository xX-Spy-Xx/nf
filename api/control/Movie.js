const express = require('express');
const app = express();
const Movie = require('../model/Movise');
const { Op } = require('sequelize');

app.post("/api/GG", async (req, res) => {
    try {
      let movie = req.body.movie; 
      
      const id = await Movie.findAll({
        where: {
          Title: {
            [Op.like]: `%${movie}%` 
          }
        },
      });
      const result = id
    res.send({ result : result, message: "success" });
    res.statusCode = 200

    } catch (e) {
      res.status(500).send({ message: e.message });
    }
  });
  





module.exports = app;