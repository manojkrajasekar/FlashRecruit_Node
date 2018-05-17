const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(cors());

var con = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "Rajasekar*1",
    "port": 3306,
    "multipleStatements": true,
    "databaseName": "photoapp"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(port, (req, res) => console.log('Running on port 8080'));

app.get('/get_contact_list', (req, res) => {
    res.send('HAI');
})

app.get('/', (req, res) => {
    res.send('Index Page');
})

