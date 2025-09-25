const http = require("http");
const { MongoClient } = require("mongodb");
const { app, setDb } = require("./app");

const connectionString = "mongodb+srv://daikarnon5002_db_user:daikarnon.2005@cluster0.dvfytfi.mongodb.net/Reja?";

MongoClient.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.log("ERROR on connection MongoDB", err);
        return;
    }

    console.log("MongoDB connection succeed");
    const db = client.db("Reja");  // <- aniq db tanlab olish
    setDb(db);  // app.js ga uzatish

    const PORT = 3000;
    const server = http.createServer(app);
    server.listen(PORT, () => {
        console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
    });
});