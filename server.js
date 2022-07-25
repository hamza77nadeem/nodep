const express = require("express");
const app = express();
const path = require("path")
const mongoose = require('mongoose');
require('./database/db.js')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.use("/", require(path.join(__dirname,"routes/routes.js")))
app.use(express.static(path.join(__dirname, "/public")))

app.set('view engine', 'hbs');






// app.post("/reg", (req,res)=>{
//         res.send("<h1>get</h1>")
//         console.log(req.body)
//         res.render("check", {abc: req.body})
//     })

// app.get("/post", (req,res)=>{
//     // res.send("<h1>get</h1>")
//     res.render("post")
// })
// app.get("/blog", (req,res)=>{
//     // res.send("<h1>get</h1>")
//     res.render("blog")
// })
// app.get("/", (req,res)=>{
//     // res.send("<h1>get</h1>")
//     res.render("home")
// })
app.listen(80, function(req,res){
    console.log("your server is running at 80")
})