console.log("Web server boshlash");
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

// MongoDB choqirish
const db = require("./server").db();

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.end("success")
});

app.get("/", function (req, res) {
    db.collection("plans").find().toArray((err, data) => {
    if(err) {
        console.log(err);
        res.end("something went wrong")
         }     else {
         console.log(data);
         res.render("reja");
        }}
    

)}
)
