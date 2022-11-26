const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

//Entry Page
app.use("/css", express.static(__dirname + '/Entry Page/css'));
app.use("/images", express.static(__dirname + '/Entry Page/images'));
app.use("/js", express.static(__dirname + '/Entry Page/js'));
app.use("/plugins", express.static(__dirname + '/Entry Page/plugins'));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/Entry Page/index.html'));
});

app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, '/Entry Page/index.html'));
});

app.get('/order', function (req, res) {
    res.sendFile(path.join(__dirname, '/Entry Page/index.html'));
});



app.listen(port);
console.log('Server started at http://localhost:' + port);