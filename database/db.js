const e = require("express");
const express = require("express");
const app = express();
const path = require("path")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')

mongoose.connect('mongodb://127.0.0.1:27017/fullstack');
console.log("Connected....")    
mongoose.pluralize(null)

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
