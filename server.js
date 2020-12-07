'use strict'

//libraries
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; 

//local files
const notFoundHandler = require('./handlers/404')
const errorHandler = require('./handlers/500') 

//routes
app.get('/', renderHome);
app.get('/data', renderData);
app.get('/bad', (req,res,next)=> {
  // an time there is something inside the next(), it will throw an error
  next('An error has occured');
})
app.use('*', notFoundHandler);

//whenever someone throws an error, use the function errorHandler
app.use(errorHandler);

//callback functions
function renderHome(req,res){
  res.status(200).send('Hello!');
}

function renderData(req,res,next){
  const outputObj ={
    10: "even",
    5: "odd",
    "time": new Date()
  }
  res.status(200).json(outputObj)
}

//turning the server on
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})