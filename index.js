const express = require('express');
const { Db } = require('mongodb');
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { match } = require('node:assert');
// const jwt = require("jsonwebtoken");

//This is for database
mongoose.connect("mongodb+srv://jk825405jay_db_user:Y1b3QHc1VI7w2Uhw@cluster0.qduspak.mongodb.net/?appName=Cluster0")
.then(() => {
  console.log("MongoDB atlas connected")
}).catch(err=> console.log(err));

const trySchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const item = mongoose.model("second", trySchema);


//App. uses
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//This is use for session;
app.use(session({
    secret: "secretwebsite",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false
    }
}));





//This is take the login-signup
app.get("/", (req, res) => {
    res.render("login-signup");
});


//This is for signup
app.post("/signup", async (req, res) => {

    const hashPssword = await bcrypt.hash(req.body.password, 10);
    try{
        const newUser = new item({
        username : req.body.username,
        email: req.body.email,
        password: hashPssword,
    });
    await newUser.save();
    res.redirect("/?from=login&signup=success");
    }catch(err){
        console.log(err);
    }
    
});

//this is made for logout -> This is work with session;
app.get("/logout", (req,res)=>{
    req.session.destroy(()=>{
        res.redirect("/")

    });
});

//This is for login route 
    app.post("/login" , async(req, res) => {
        try{
        const user = await item.findOne({
            email : req.body.email, 
            
        });
        if(!user){
            return res.send("User not found");
            
        }

        const match = await bcrypt.compare(req.body.password, user.password);
        if(match){
            req.session.userId = user._id;
            return res.redirect("/home");
            
        }else{
            
        res.send(`Wrong Password..
            <script>
                setTimeout(() => {
                    window.location= "/signup";
                }, 1500);
            </script>`); 
            
        }
    }catch(err){
            
        console.log(err);
        res.render("login-signup");
        }
        
    });

app.get('/home', (req, res)=>{
    if(!req.session.userId){
        return res.redirect("/")
    }

    res.render("home");
});

app.listen(3000, ()=>{
    console.log('server running on localhost://3000');
});