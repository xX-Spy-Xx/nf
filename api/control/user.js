const express = require('express');
const app = express();
const users = require('../model/users');
require("dotenv").config();
const jwt=require("jsonwebtoken")

app.post('/api/users', async (req,res) =>{
    try{
        let nf=req.body
        console.log(nf)
        const tor = await users.create(nf)
        res.statusCode=200
        res.send({tor:tor,message:"success"})
    }catch(e){
      res.statusCode=500
      res.send({message:e.message})
    }
  })

app.post('/api/login', async (req,res) =>{
  try{
  const FF=await users.findAll({
    where:{
      Email: req.body.Email,
      password:req.body.password
    }
  })

  if (FF.length >0) {
    let token=jwt.sign({id:FF[0].userID}, process.env.secret)
    return res.send({token:token,message:'success'}).status(200)
  }else{
    res.statusCode=401
    res.send({message:"Invalid email or password"})
  }
  }catch(e){
    res.statusCode=500
    res.send({message:e.message})
  }
})
app.post("/api/NF", async (req, res) => {
  try {
    const secretKey = process.env.secret;  // Make sure this is properly set
    if (!req.headers.authorization) {
      return res.status(401).json({ message: 'Authorization header missing' });
    }
    const payload = req.headers.authorization.replace('Bearer ', '');
    const decodedToken = jwt.verify(payload, secretKey);  

    res.status(200).send({ userID: decodedToken.id });
    
  } catch (e) {
    // Send a 500 status code with the error message
    res.status(500).send({ message: e.message });
  }
});


module.exports = app;