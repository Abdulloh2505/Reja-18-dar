console.log("Web server boshlash");
const express = require ("express");
const app = express();
const http = require("http");


//1
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//2
//3
app.set("views","views");
app.set("view engine","ejs");


//4
app.get("/hello", function(req,res) {
res.end("<h1>salom hayot yangiliklar </h1>");

})
app.get("/gift", function(req,res) {
res.end("<h1>sovg'alar saxifasidasiz </h1>");

})

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function ()
{
    console.log(`THe server is running successfully on port: ${PORT}`);
});

// versiya 20 buldi 