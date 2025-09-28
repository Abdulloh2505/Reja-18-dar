// server.js
console.log("Starting Webserver...");

const http = require("http");
const mongodb = require("mongodb");

const connectionString =
  "mongodb+srv://daikarnon5002_db_user:daikarnon.2005@cluster0.dvfytfi.mongodb.net/reja";

// Connect to MongoDB
mongodb.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, },
    (err, client) => {
     if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDb connection succeed");
      module.exports = client;


      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT,function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
    }
  );














