console.log("Web server boshlash");
const express = require("express");
const app = express();

const fs = require("fs");
let user;
fs.readFile("database/user.json","utf8",(err, data) =>{
    if(err) {
        console.log("ERROR", err);
    } else {
        user = JSON.parse(data);
    }
});
//MongoDB chaqirish
const db = require("./server").db();
//1
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//2
//3
app.set("views","views");
app.set("view engine","ejs");


//4 Routing code
//app.get ("/", function(req, res){
//  resizeBy.render("Haridlar");
//})
app.get('/author', (req, res) => {
    res.render("author", { user: user });
})

app.get("/", function(req, res){
   res.render("Reja");
});

module.exports = app;
