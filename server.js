
const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://daikarnon5002_db_user:daikarnon.2005@cluster0.dvfytfi.mongodb.net/Reja?"

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err,client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else{
        console.log("MongoDB connection succed");
      module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);
      let PORT = 3000;
       server.listen(PORT, function ()
{
    console.log(`THe server is running successfully on port: ${PORT}, http://localhost:${PORT}`

    );
});
    }

});









