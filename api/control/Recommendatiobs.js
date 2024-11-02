const express = require('express');
const app = express();
const Recommendatiobs = require('../model/Recommendations');

app.post('/api/VV', async (req,res) =>{
    try{
        let recom = req.body 
        await Recommendatiobs.create(recom)
        res.send({message:"success"}).status(200)
    }catch(e){
        // Send a 500 status code with the error message
    res.status(500).send({ message: e.message });
    }
})
 
app.post("/api/young", async (req,res ) =>{
    try{
        let recom = req.body 
        const io = await Recommendatiobs.findAll({
            where:{
                MovieID:recom.movie
            },
            attributes:['MovieID','Comment','UserID']
        })
        res.send({
            result:io,message:"success"
        }).status(200)
        
    }catch(e){
       // Send a 500 status code with the error message
    res.status(500).send({ message: e.message }); 
    }
})

module.exports = app;