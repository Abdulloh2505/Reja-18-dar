// app.js
console.log("Webserverni boshlash");
const express = require("express");

module.exports = (client) => {
  const app = express();
  const db = client.db("reja"); // MongoDB database nomi

  // 1: Kirish code
  app.use(express.static("public"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // 3: Views code
  app.set("views", "views");
  app.set("view engine", "ejs");

  // 4: Routing code
  // Yangi item yaratish
  app.post("/create-item", (req, res) => {
     console.log("user entered /create-item");
    const new_reja = req.body.reja; // formdan kelgan ma’lumot
    console.log("Kelgan reja:", new_reja);

    db.collection("plan").insertOne({ reja: new_reja }, (err, data) => {
      if (err) {
        console.log(err);
        return res.end("Something went wrong");
      }
      res.end("Successfully added");
      // yoki: res.json(data.ops[0]);
    });
  });

  // Bosh sahifa
  app.get("/", (req, res) => {
    console.log("user entered /");
    db.collection("plan")
      .find()
      .toArray((err, data) => {
        if (err) {
          console.log(err);
          return res.end("Something went wrong");
        }
        console.log("Plans:", data);
        res.render("reja", { plans: data }); // ejs'ga malumot berib yuborish
      });
  });

  return app;
};