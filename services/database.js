const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URL;
const client = new MongoClient(uri);
const db = client.db(process.env.DB_NAME);

console.log(process.env.DB_NAME + " " + process.env.MONGO_URL);

module.exports = {
    db: db,
    client: client
};
