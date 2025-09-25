const http = require("http");
const mongodb = require("mongodb");

const connectionString =
  "mongodb+srv://daikarnon5002_db_user:daikarnon.2005@cluster0.dvfytfi.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.log("ERROR on connection MongoDB", err);
      return;
    } else {
      console.log("--------------------------------------------");
      console.log("MongoDB connected successfully!");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);

      const PORT = process.env.PORT ?? 5005;
      server.listen(process.env.PORT || PORT, (err, res) => {
        console.log(`Server is running on port: http://localhost:${PORT}`);
      });
    }
  }
);