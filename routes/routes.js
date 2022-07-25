const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
// const router = require("../../project1/routes/routes");
const router = express.Router();
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
const schema1 = new mongoose.Schema({
    blogheading: {type: String, required: true},
    blog: String
})

router.post("/reg", (req,res)=>{
    // res.send("<h1>get</h1>")
    // const schema1 = new mongoose.Schema({
    //     blogheading: {type: String, required: true},
    //     blog: String
    // })
    // module.exports = schema1
    // var model1 = new mongoose.model('blog', schema1)

    const rsItems = new model1({ 
        blogheading: req.body.heading,
        blog: req.body.blog,
      
    });

    rsItems.save().then(() => {
        console.log('Product Text1 Saved')
    }).catch((err)=>{
        console.log('Product Saved Error..' + err)
    });

    // res.render("home", {abc: req.body})
    console.log(req.body.heading)
    model1.find((err, data)=>{
        if(!err){
            res.render('home',{itemdata: data})
        }
        else{
            res.send("data fetch error" + err)
        }
    })
})

router.get("/post", (req,res)=>{
    // res.send("<h1>get</h1>")
    res.render("post")
})
var model1 = new mongoose.model('blog', schema1)
router.get("/api", (req,res)=>{
    // res.send("<h1>get</h1>")
    model1.find((err, data)=>{
        if(!err){
            res.render('items',{itemdata: data})
        }
        else{
            res.send("data fetch error" + err)
        }
    })
   
})
router.get('/api/:id', (req,res)=>{
    model1.findById({_id: req.params.id},(err, data)=>{
        if(!err){
            res.render('itemsdetail',{itemdata: data})
            // res.render(data)
        }
        else{
            res.send("data fetch error" + err)
        }
    })
    // res.render("itemsdetail")
})
router.delete("/find/:id", async(req, res)=>{    
    await model1.findByIdAndRemove({
        _id: req.params.id        
    }).then((data)=>{
        res.redirect("items")
        // res.send("Product Deleted....")
    }).catch((error)=>{
        res.send("Error Delete API" + error)
    })
})
router.get('/find/:id', (req,res)=>{
    model1.findById({_id: req.params.id},(err, data)=>{
        if(!err){
            res.render('itemsdetail1',{itemdata: data})
            // res.render(data)
        }
        else{
            res.send("data fetch error" + err)
        }
    })
    // res.render("itemsdetail")
})
router.get("/blog", (req,res)=>{
    // res.send("<h1>get</h1>")
    model1.find((err, data)=>{
        if(!err){
            res.render('blog',{itemdata: data})
        }
        else{
            res.send("data fetch error" + err)
        }
    })
})
router.get("/", (req,res)=>{
    // res.send("<h1>get</h1>")
    model1.find((err, data)=>{
        if(!err){
            res.render('home',{itemdata: data})
        }
        else{
            res.send("data fetch error" + err)
        }
    })
})
module.exports = router;