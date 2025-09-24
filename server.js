console.log("Web server boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");
let user;
fs.readFile("database/user.json","utf8",(err, data) =>{
    if(err) {
        console.log("ERROR", err);
    } else {
        user = JSON.parse(data);
    }
});
//MongoDB connect
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


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function ()
{
    console.log(`THe server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});

// versiya 20 buldi 