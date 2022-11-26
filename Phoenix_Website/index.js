const express = require('express');
const app = express();
const port = 3000;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<username>:<password>@<clustername>.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//listen on port express
app.listen(port, () => console.log(`Example app listening on port ${port}!`));