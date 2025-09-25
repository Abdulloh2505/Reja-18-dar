// server.js
console.log("Starting Webserver...");

const http = require("http");
const { MongoClient } = require("mongodb");

const connectionString =
  "mongodb+srv://daikarnon5002_db_user:daikarnon.2005@cluster0.dvfytfi.mongodb.net/reja?retryWrites=true&w=majority";

// Connect to MongoDB
MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log("MongoDB connected successfully!");

    const app = require("./app")(client);

    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server running at: http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.log("MongoDB connection error:", err);
  });