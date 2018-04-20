const dotenv = require('dotenv'),
  express = require('express')
  , massive = require('massive')
  , app = express()
  , bodyParser = require('body-parser')
  , { SERVER_PORT } = process.env

require('dotenv').config()

app.use(bodyParser.json())


app.listen(process.env.SERVER_PORT, ()=>{
  console.log(`Listening on port ${process.env.SERVER_PORT}`)
});