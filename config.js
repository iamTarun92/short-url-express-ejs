const hostname = "127.0.0.1";
const port = 4000;
const dbName = "short-url";
const mongoURI = `mongodb://${hostname}:27017/${dbName}`;

module.exports = { hostname, port, dbName, mongoURI };
