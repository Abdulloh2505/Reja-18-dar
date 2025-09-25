const http = require("http");
const mongodb = require("mongodb");

const connectionString =
  "mongodb+srv://daikarnon5002_db_user:daikarnon.2005@cluster0.dvfytfi.mongodb.net/reja";

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.log("ERROR on connection MongoDB =>", err);
      return;
    }

    console.log("--------------------------------------------");
    console.log("MongoDB connected successfully!");

    // App'ni client bilan yaratamiz
    const app = require("./app")(client);

    const PORT = 3000;
    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`Server is running on port: http://localhost:${PORT}`);
    });
  }
);