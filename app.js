// app.js
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

  // 4 Routing code
  app.post("/create-item", (req, res) => {
  // STEP 2
  const new_plan = req.body.plan;
  // STEP 3
  db.collection("plan").insertOne({ plan: new_plan }, (err, data) => {
    res.json(data.ops[0]);
  });
});

  app.get("/", (req, res) => {
    console.log("GET / api");
    db.collection("plan")
      .find()
      .toArray((err, data) => {
        if (err) {
          console.log(err.message);
          res.end("(app.get/) something went wrong");
        } else {
          res.render("reja", { items: data }); // reja.ejs
        }
      });
  });

  return app;
};