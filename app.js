console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// MongoDB connect => chaqirish
const db = require("./server").db();

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 2: Session code
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");
// 4: Routing code
// app.get("/", function (req, res) {
//   res.end(`<h1 style="background:red">HELLO WORLD by BekzodAli</h1>`);
// });

// // app.get("/hello", function (req, res) {
// //   res.end(`<h1 style="background:red">Hi my name is danyel</h1>`);
// // });

// // app.get("/gift", function (req, res) {
// //   res.end("<h1>Siz sovgalar bo'limidasiz</h1>");
// // });

app.post("/create-item", (req, res) => {
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        console.log(data);
        res.render("reja.ejs",{ plans: data });
      }
    });
});

module.exports = app;
















// // app.js
// console.log("Webserverni boshlash");
// const express = require("express");

// module.exports = (client) => {
//   const app = express();
//   const db = client.db("reja"); // MongoDB database nomi

//   // 1: Kirish code
//   app.use(express.static("public"));
//   app.use(express.json());
//   app.use(express.urlencoded({ extended: true }));

//   // 3: Views code
//   app.set("views", "views");
//   app.set("view engine", "ejs");

//   // 4: Routing code
//   // Yangi item yaratish
//   app.post("/create-item", (req, res) => {
//      console.log("user entered /create-item");
//     const new_reja = req.body.reja; // formdan kelgan ma’lumot
//     console.log("Kelgan reja:", new_reja);

//     db.collection("plan").insertOne({ reja: new_reja }, (err, data) => {
//       if (err) {
//         console.log(err);
//         return res.end("Something went wrong");
//       }
//       res.end("Successfully added");
//       // yoki: res.json(data.ops[0]);
//     });
//   });

//   // Bosh sahifa
//   app.get("/", (req, res) => {
//     console.log("user entered /");
//     db.collection("plan")
//       .find()
//       .toArray((err, data) => {
//         if (err) {
//           console.log(err);
//           return res.end("Something went wrong");
//         }
//         console.log("Plans:", data);
//         res.render("reja", { plans: data }); // ejs'ga malumot berib yuborish
//       });
//   });

//   return app;
// };